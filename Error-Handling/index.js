

//Types of error in js

// syntax error

// var obj = {
//   name = 'sachin',
//   age = 40
// }

// const x

//reference errors

//  x
// console.log(x)

//type error

// var data = 'hello sachin'
// var data = ['hello', 'sachin']

// data.join()
// console.log(data.split())

// try {
//   console.log('hi');
//   console.log('bye');
// } catch {
//   console.log('error occured ')
//   console.log('kohli')
// }
// console.log('hello');


var age = 15

console.log('hi')

try {
  if (age < 18) {
    throw 'age must be >=18';
  } else {
    console.log('age', age);
  }
  
} catch (error) {
  console.log('error happened')
} 

console.log('bye')