function printerError(s) {
  let param = /[^a-m]/g;
  
  return `${(s.match(param) || []).length}/${s.length}`
}