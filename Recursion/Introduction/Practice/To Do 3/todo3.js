function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] == value) {
        return true;
    } else if (value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    } else if (value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}




function tarai(x, y, z) {
    var result
    if (x <= y) {
        result = y
    } else {
        result = tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y))
    }
    return result
}

console.log(tarai(10, 2, 9))




function rGCF(a, b) {
    var result
    if (a == b) {
        result = a
    } else if (a > b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = rGCF(a - b, b);
        }
    } else if (a < b) {
        if ((a / b) % 1 === 0) {
            result = b;
        } else {
            result = rGCF(a, b - a);
        }

    }
    return result
}