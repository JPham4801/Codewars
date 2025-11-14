 
function gimme (triplet) {
  let sortedArr = [...triplet]
  sortedArr.sort(function(a, b){return a - b})
  
  return triplet.indexOf(sortedArr[1])
}