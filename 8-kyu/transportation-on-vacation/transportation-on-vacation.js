function rentalCarCost(d) {
  let total = 0;
  
  if(d >= 7){
    return (d * 40) - 50
  } else if(d < 3){
    return d * 40
  } else{
    return (d * 40) - 20
  }
}