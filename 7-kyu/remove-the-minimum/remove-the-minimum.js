 
function removeSmallest(numbers) {
  let num = numbers.slice()
  let pos = num.indexOf(Math.min(...numbers))
  num.splice(pos, 1)  
  
  return num
}