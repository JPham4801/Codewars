 
function removeSmallest(numbers) {
//   if(numbers.length > 0){
//     return [];
//   }
  let pos = numbers.indexOf(Math.min(...numbers))
  numbers.splice(pos, 1)  
  
  return numbers
}