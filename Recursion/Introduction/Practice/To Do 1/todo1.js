function rSigma(n) {
    var num = Math.trunc(n)
    if (num < 0) {
        return 0
    } else {
        return num + rSigma(num - 1)
    }

}

console.log(rSigma(5))


// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, 
// truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFact(n) {
    var num = Math.trunc(n)
    if (num == 0) {
        return 1
    } else {
        return num * rFact((num) - 1)
    }
}

console.log(rFact(6.5))