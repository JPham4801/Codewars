 
function firstNonConsecutive(arr){
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] + 1 !== arr[i + 1]){
      console.log(arr[i], arr[i + 1]);
      return arr[i + 1];
      break
    }
  }
  return null;
}