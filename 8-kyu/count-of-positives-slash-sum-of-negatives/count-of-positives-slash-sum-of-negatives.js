function countPositivesSumNegatives(input) {
  if(!input || input.length === 0){
    return []
  }
  
  let a = input.filter(x => x > 0).length
  let b = input.filter(x => x < 0).reduce((a, b) => a + b)
  
  return [a, b]
}