const arr = [21, 1, 24, 15, 3, 55, 34, 99, 0, 46, 67, 88]
const sort = (arr) => {
  var len =arr.length;
  var gap = Math.floor(len/2);
  while(gap!==0){
      for(var i = gap;i<len;i++){
          var temp = arr[i];
          var j;
          for(j=i-gap;j>=0&&temp<arr[j];j-=gap){
              arr[j+gap] = arr[j];
          }
          
          arr[j+gap] = temp;
      }
      gap=Math.floor(gap/2);
  }
  return arr;
}

sort(arr)