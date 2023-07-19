
function subtract(a, b){
  return a - b
}

function absolute(num) {
  if(num > 0){
    return num
  } else {
    return -1 * num
  }
}

function absoluteDiff(a, b) {
  var diff = subtract(a, b)
  var abs = absolute(diff)
  return abs
}

console.log(absoluteDiff(3, 5))