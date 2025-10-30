 
var number = function(busStops){
  
  return busStops.reduce(((x, y) => (x + y[0]) - y[1]), 0)
}