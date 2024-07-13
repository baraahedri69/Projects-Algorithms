//Reverse
function reverse(arr) {
    for (i = 0; i < (arr.length / 2); i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

var m = reverse([3, 1, 6, 4, 2])
console.log(m)




//Rotate
function rotateArr(arr, shiftBy) {
    var absValue = Math.abs(shiftBy)
    while (absValue > 0) {

        if (shiftBy > 0) {
            var temp = arr[arr.length - 1]

            for (i = arr.length - 1; i > 0; i--)
                arr[i] = arr[i - 1]
            arr[0] = temp

        } else {
            var temp = arr[0]
            for (i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1]
            }
            arr[arr.length - 1] = temp
        }
        absValue--;
    }
    return arr
}

console.log(rotateArr([1, 2, 3, 4], 2))


// function filterRange(arr, min, max) {
// 	for(i = 0; i < arr.length; i++) {
// 		if(arr[i] > min && arr[i] < max) {
// 			for( j = i; j < arr.length - 1; j++) {
//                 arr[j] = arr[j + 1]
//             }
//             arr.length = arr.length - 1
// 			i--;
// 		}
//     }
//     return arr
// }



// Concat
function arrConcat(arr1, arr2) {
    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1
}

var a = arrConcat(['a', 'b'], [1, 2])
console.log(a)