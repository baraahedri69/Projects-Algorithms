// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.


function pushFront(arr, x) {

    arr.unshift(x)

    return arr
}

var a = pushFront([1, 2, 3], 4)
console.log(a)


// Given an array, remove and return the value at the beginning of the array.
//  Do this without using any built-in array methods except pop().

function popFront(arr) {
    var temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[0]
    arr[0] = temp
    return arr.pop()
}

var b = popFront([1, 2, 3])
console.log(b)


// Given an array, index, and additional value, insert the value into array at given index.
//  Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to 
// insertAt(arr,0,val).

function insertAt(arr, idx, val) {
    arr[arr.length] = val
    for (var i = arr.length - 1; i > idx; i--) {
        var temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
    }
    return arr

}

var l = insertAt([2, 3, 1], 1, 5)
console.log(l)



// Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx) {
    for (var i = arr.length - 1; i > idx; i--) {
        var temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
    }
    return arr.pop()

}

var s = removeAt([2, 3, 1], 1)
console.log(s)




// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {

    for (i = 0; i < arr.length - 1; i += 2) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp

    }
    return arr
}

var f = swapPairs([1, 2, 3, 4])
console.log(f)




function removeDublicates(arr) {
    var idx = 0;
    var count = 1;
    while (count < arr.length) {
        if (arr[idx] == arr[count]) {
            count++;
        } else {
            arr[idx + 1] = arr[count];
            idx++;
            count++;
        }
    }
    for (var x = 0; x < idx; x++) {
        arr.pop();
    }
    return arr;
}