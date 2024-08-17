

var obj = {
  name: 'sachin',
  age: 40,
  address: {road: 101}
}

console.log(obj)

//without destructuring

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.address.road)
// console.log(obj.address.road)
// console.log(obj.address.road)
// console.log(obj.address.road)
// console.log(obj.address.road)
// console.log(obj.address.road)

//with destructuring

// var { name, age, address: { road } } = obj
// var {road} = address

// console.log(name)
// console.log(age)
// console.log(road)



var arr = ['sachin', { income: [{ cars: 10, cash: 100000 }], road: 101 }]
// without destructure
// console.log(arr[0])
// console.log(arr[1].income[0].cars)
// console.log(arr[1].income[0].cash)
// console.log(arr[1].road)

// with destructure

var [name, {income:[{cars, cash}], road}] = arr


// var [name, obj] = arr
// var {income, road} = obj
// var [innerobj] = income
// var {cars, cash} = innerobj
console.log(name)
console.log(cars)
console.log(cash)
console.log(road)


