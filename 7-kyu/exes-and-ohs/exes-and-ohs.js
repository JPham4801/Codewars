function XO(str) {
  let letters = str.toLowerCase().split('')
    return letters.filter(a => a === "x").length === letters.filter(a => a === "o").length
}