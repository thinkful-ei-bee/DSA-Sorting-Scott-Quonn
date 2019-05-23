//Understanding merge sort
//given: 21, 1,| 26, 45,|| 29, 28,| 2, 9,||| 16, 49,| 39, 27,|| 43, 34,| 46, 40
//
//What is resulting list that will be sorted after 3 recursive
//calls to mergesort?
//21,1  26,45  29,28  2,9  16,49  39,27  43,34  46,40
//
//What is the resulting list that will be sorted after 16 recursive
//calls to mergesort?
//
//
//What are the first 2 lists to be merged?
//
//
//Which two lists would be merged on the 7th merge?
//
//

//         28376541

mergeSort = array => {
    if (array.length <= 1) {
        console.log("array: " ,array)
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    console.log("inside mergeSort()","left: ", left, "right: ", right)
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

merge = (left, right, array) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    console.log("inside merge()", "left: ", left, "right: ", right, "array: ", array)

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

let arr = [2,8,3,7,6,5,4,1];
console.log(mergeSort(arr), arr);