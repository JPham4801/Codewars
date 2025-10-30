 
function findNextSquare(sq) {
  let squaredNum = Math.sqrt(sq);  
​
  if (sq > 0 && squaredNum % 1 === 0){
    return Math.pow((squaredNum += 1), 2);
  } else {
    return -1;
  }
}