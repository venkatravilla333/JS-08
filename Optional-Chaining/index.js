

var obj = {
  name: 'sachin',
  age: 40,
  address: {
    state: 'mumbai'
  }
}

console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.address.state)
// console.log(obj.address1.state)

//short circuit operator

console.log(obj.address && obj.address.state)
console.log(obj.address1 && obj.address1.state)

//optional chaining

console.log(obj.address?.state);
console.log(obj.address1?.state);


