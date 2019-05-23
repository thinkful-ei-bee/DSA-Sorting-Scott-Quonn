//Understanding merge sort
//given: [2,8,3,7,6,5,4,1]
//
//What is resulting list that will be sorted after 3 recursive
//calls to mergesort?
//left:[21] right: [1] array: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
//
//What is the resulting list that will be sorted after 16 recursive
//calls to mergesort?
// left: [4] right: [1] array:[1,1]
//
//
//What are the first 2 lists to be merged?
//[2] + [8]
//
//Which two lists would be merged on the 7th merge?
//[2,3,7,8] + [1,4,5,6]
//

//         28376541

let count = 0;
let count2 = 0;
mergeSort = (array) => {
    count++;
    if (array.length <= 1) {
        console.log("ms-count: ", count, "array: ", array)
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    console.log("ms-count: ", count, "inside mergeSort()", "left: ", left, "right: ", right)
    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right, array);
};

merge = (left, right, array) => {
    count2++;
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
    console.log("merge-count: ", count2, "inside merge()", "left: ", left, "right: ", right, "array: ", array)

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

let arr = [2, 8, 3, 7, 6, 5, 4, 1];
let arr1 = [2, 8, 3, 7, 6, 5, 4, 1]
// console.log(mergeSort(arr), arr1);

//.1) Understanding quicksort
let coun = 0;
let coun1 = 0;
quickSort = (array, start = 0, end = array.length) => {
    if (start >= end) {
        return array;
    }

    coun++;
    // console.log("qs-count:",coun,"from qs():" , "array:", array, "start: ", start, "end: ", end)
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}

partition = (array, start, end) => {
    coun1++
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    if(  coun1 === 1){
        console.log(ar1)
        console.log("partition-count:",coun1,"from partition()", "array:", array, "start: ", start, "end: ", end) 
        
    }
    swap(array, end-1, j);
    return j;
}

swap = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

let ar = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ];
let ar1 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ];
quickSort(ar);