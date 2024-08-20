
function regularFun() {
  console.log('hi')
  return 100
  return 200
}
console.log(regularFun())

function* genFun() {

  try {
     console.log('hello')
  yield 500
  yield 1000
  yield 2000
  
    
  } finally {
    yield 3000
    yield 4000
  }
 
}
var genObj = genFun()
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.return())
console.log(genObj.next())
console.log(genObj.next())