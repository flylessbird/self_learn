function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        j = i - 1
        var temp = a[i]
        while (j >= 0 && a[0] > temp) {
            a[j] = a[j - 1]
            j--
        }
        a[j + 1] = temp
    }
    return a
}
