const arr = [1, 23, 33, 44, 55, 66, 77, 88, 99, 111, 112, 113]
// function binSearch(arr, data) {
//   let upBound = arr.length-1
//   let lowBound = 0
//   let middle
//   while(lowBound<=upBound){
//     middle = Math.floor((lowBound + upBound) / 2)
//     if(data<arr[middle]){
//       upBound = middle - 1
//     }else if(data>arr[middle]){
//       lowBound = middle + 1
//     }else{
//       return middle
//     }

//   }
//   return -1
// }
function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    }
    else if (arr[mid] > data) {
      upperBound = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}
console.log(binSearch(arr, 23))
