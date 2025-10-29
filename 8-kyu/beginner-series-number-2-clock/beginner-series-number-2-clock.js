function past(h, m, s){
  let timeInSeconds = (h * 3600) + (m * 60) + s;
  
  return timeInSeconds * 1000;
}