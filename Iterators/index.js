

// var iterable = [1, 2, 3, 4, 5]

// console.log(iterable)
// var iterator = iterable[Symbol.iterator]()
// console.log(iterator)
//  console.log(iterator.next())
//  console.log(iterator.next())
//  console.log(iterator.next())
//  console.log(iterator.next())
//  console.log(iterator.next())
//  console.log(iterator.next())

var obj = {
  fname: 'virat',
  lname: 'kohli',
  age: 30
}

obj[Symbol.iterator] = function () {
  var properties = Object.keys(obj)
  [fname, lname, age]
  var count = 0
  var next = () => {
    if (count >= properties.length) {
      return {done: true, value: undefined}
    } else {
      return {done: false, value: this[properties[count++]]}
    }
  }
  return {next}
} 

console.log(obj)
// var iteratorObj = obj[Symbol.iterator]()

// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

for (var value of obj) {
  console.log(value)
}



