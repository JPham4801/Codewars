function humanReadable (seconds) {
  let hrs = Math.floor(seconds / 3600)
  let mins = Math.floor((seconds % 3600) / 60)
  let secs = (seconds % 3600) % 60
  
  if(hrs < 10){
   hrs = '0' + hrs
  }
  
  if(mins < 10){
    mins = '0' + mins
  }
  
  if(secs < 10){
    secs = '0' + secs
  }
  
  return hrs + ':' + mins + ':' + secs
}