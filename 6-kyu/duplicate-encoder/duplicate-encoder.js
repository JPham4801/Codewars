function duplicateEncode(word){
    let letters = [...word.toLowerCase()]
    let newString = []
    
    for(let i = 0; i < word.length; i++){
      if(letters.filter(a => letters[i] === a).length > 1){
        newString.push(")")
      } else{
        newString.push("(")
      }
    }
    return newString.join('')
}
​