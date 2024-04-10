# 冒泡排序


def optimized_bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # 添加一个标记，表示此轮是否发生了交换
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # 如果此轮没有发生交换，提前结束排序
        if not swapped:
            break

    return arr


# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(optimized_bubble_sort(arr))  # Output: [11, 12, 22, 25, 34, 64, 90]
