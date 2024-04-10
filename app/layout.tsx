import '@/app/ui/global.css';
/**
 * The root layout component that renders the entire HTML page.
 *
 * @param props The component props.
 * @param props.children The component children.
 * @returns The rendered component.
 */
const RootLayout = function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The root layout component that renders the entire HTML page.
  return (
    <html lang="en">
      <body>
        {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
        {/* The root layout component that renders the entire HTML page.。 */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
