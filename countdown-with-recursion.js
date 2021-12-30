// Only change code below this line
function countdown(n) {
    if (n <= 0) {
        return []
    } else {
        let countArr = countdown(n - 1)
        countArr.unshift(n)
        return countArr
    }
}
// Only change code above this line

// countdown(0) => []
// countdown(1) => [1]
// countdown(2) => [2, 1]
// countdown(3) => [3, 2, 1]
// countdown(4) => [4, 3, 2, 1]
// countdown(5) => [5, 4, 3, 2, 1]

console.log(countdown(5))

// Version 2
function countdown(n) {
    return n <= 0 ? [] : [n, ...countdown(n - 1)]
}
