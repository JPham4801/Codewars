function squareDigits(num){
  return parseInt(num.toString().split('').map(a => a*a).join(''))
}