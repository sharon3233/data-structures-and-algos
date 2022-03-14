function bubbleSort(arr) {
    //seth array length
    let n = arr.length;
    var i, j, temp;
        var swapped;
        for (i = 0; i < n - 1; i++)
        {
            swapped = false;
            for (j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    //set swap so it continues.
                    swapped = true;
                }
            }
            // IF no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }

    return arr;
}

module.exports = bubbleSort
