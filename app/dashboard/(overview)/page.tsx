import { fetchCardData } from '@/app/lib/data';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import {
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Card } from '../../ui/dashboard/cards';

export default async function Page() {
  console.log('Page loaded');

  // 解决请求瀑布的问题
  const totalData = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Collected"
          value={totalData.totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Pending"
          value={totalData.totalPendingInvoices}
          type="pending"
        />
        <Card
          title="Total Invoices"
          value={totalData.numberOfInvoices}
          type="invoices"
        />
        <Card
          title="Total Customers"
          value={totalData.numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* 组件异步加载 */}
        <Suspense fallback={<RevenueChartSkeleton></RevenueChartSkeleton>}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton></LatestInvoicesSkeleton>}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
