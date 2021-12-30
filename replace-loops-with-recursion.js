// Version 1
function sum(arr, n) {
    // Only change code below this line
    if(n <= 0){
      return 0
    } else {
      return sum(arr, n - 1) + arr[n - 1]
    }
    // Only change code above this line
  }
  
  // Version 2
  function sum(arr, n) {
    // Only change code below this line
    return n <= 0 ? 0 : sum(arr, n - 1) + arr[n - 1]
    // Only change code above this line
  }
  
  console.log(sum([1, 2, 3, 4], 3))