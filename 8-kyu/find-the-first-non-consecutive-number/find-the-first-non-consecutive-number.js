function firstNonConsecutive(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] === undefined){
      return null
    } else if(arr[i] + 1 !== arr[i + 1]){
      console.log(arr[i], arr[i + 1]);
      return arr[i + 1];
      break
    }
  }
}