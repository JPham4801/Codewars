function SeriesSum(n) {
  for(var s = 0, i = 0; i < n; i++){
    s += 1 / (i * 3 + 1);
  }
  
  return s.toFixed(2)
}