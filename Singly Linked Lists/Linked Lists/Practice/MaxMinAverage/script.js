function max(node) {
    var maxRunner = this.head.value
    var runner = this.head
    var count = 0
    while (runner) {
        if (maxRunner < runner) {
            maxRunner = runner.value

        }
        count++
        runner = runner.next
    }
    return maxRunner
}




// Create min(node) to return list’s smallest val.


function min(node) {
    var minRunner = this.head.value
    var runner = this.head
    var count = 0
    while (runner) {
        if (minRunner > runner.value) {
            minRunner = runner.value

        }
        count++
        runner = runner.next
    }
    return minRunner
}


// Create average(node) to return average val.



function avg(node) {
    var runner = this.head

    var sum = 0;
    var avg;
    while (runner) {
        sum += runner.value
        runner = runner.next
    }
    avg = sum / this.length()
    return avg
}