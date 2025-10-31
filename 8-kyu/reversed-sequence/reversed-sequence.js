let arr = [];
​
const reverseSeq = n => {
  for(let i = 0; i = n; i++){
    arr.push(n);
    n = n - 1
  }
  return arr
};