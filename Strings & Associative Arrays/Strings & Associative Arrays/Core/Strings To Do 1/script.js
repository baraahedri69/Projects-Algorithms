function removeBlank(str) {
    return str.replace(/\s+/g, '')
}

var a = removeBlank('Pl ayTha tF u nkyM usi c')
console.log(a)



function getDigits(str) {
    var string = str.split("");
    var int = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] % 1 == 0) {
            int += string[i];
        }
    }
    return int / 1;
}

console.log(getDigits('0s1a3y5w7h9a2t4?6!8?0'))



function acronym(str) {
    return str.match(/\b(\w)/g).join('').toUpperCase()
}

console.log(acronym("Live from New York, it's Saturday Night!"))




function countNonSpaces(str) {
    var count = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            count++
        }
    }
    return count
}

console.log(countNonSpaces('Honey pie, you are driving me crazy'))



function shorterStrings(arr, length) {

    for (i = 1; i < arr.length; i++) {
        if (arr[i].length < length) {
            arr.pop(arr[i])

        }
    }
    return arr
}

var b = shorterStrings(['zuma', 'test', 'one', '1'], 2)
console.log(b)