//How to create object

// var obj1 = {
//   name: 'sachin',
//   age: 40,
//   play: function () {
//     console.log('play')
//   }
// }
// console.log(obj1)

// var obj2 = {
//   name: 'kohli',
//   age: 30,
//   play: function () {
//     console.log('play')
//   }
// }
// console.log(obj2)

//ES-5

//factory fuction

// function test(name, age, play) {
//   return {
//     name:name ,
//     age: age,
//     play: () => {
//       console.log('play')
//     }
//   }
// }

// var obj1 = test('sachin', 40)
// var obj2 = test('kohli', 30)
// console.log(obj1)
// console.log(obj2)

//ES-5
// constructor function

// function Test(name, age) {
//   console.log(this)
//   this.name = name;
//   this.age = age;
//   this.play = () => {
//     console.log('play')
//   }
// }
// var obj1 = new Test('sachin', 40)
// var obj2 = new Test('kohli', 35)
// console.log(obj1)
// console.log(obj2)

//classical way

// class test{
//   constructor(name, age) {
//     console.log(this)
//     this.name = name;
//     this.age = age;
//     this.play = () => {
//       console.log('play')
//     }
//   }
// }
// var obj1 = new test('sachin', 40)
// var obj2 = new test('kohli', 30)
// console.log(obj1)
// console.log(obj2)
// console.log(typeof test)

//Objects are dynamic
// var obj = {
//   name: 'sachin',
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(obj)
//how to access object properties

// console.log(obj.name)
// console.log(obj['name'])
// obj.play()
// obj['play']()

//How to add new properties to object

// obj.age = 40
// obj.go = ()=>{}
// console.log(obj)

//how to update properties in object

// obj.name = 'dhoni'
// obj.play = ()=>{}
// console.log(obj)

//how to delete obj properties

// delete obj.name
// delete obj.play
// console.log(obj)


//How to iterate or loop object


// var obj = {
//   name: 'sachin',
//   age: 40,
//   color: 'white',
//   height: '5 feet',
//   play: ()=>{
//   console.log('play')
//   }
// }

// console.log(obj)
// without loop

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.color)
// console.log(obj.height)
// obj.play()

//for in

// for (var key in obj) {
//   console.log(key, obj[key])
// }
// for (var key of obj) {
//   console.log(key, obj[key])
// }

// var x = Object.keys(obj)
// console.log(x)

// for (var value of x) {
//   console.log(value)
// }


// var y = Object.values(obj)
// console.log(y)

// var z = Object.entries(obj)
// console.log(z)

// for (var value of z) {
//   console.log(value)
//   for (var val of value) {
//     console.log(val)
//   }
// }


//How to copy primitives and reference

//primitives

// var x = 10

// var y = x
// console.log(x)
// console.log(y)
// y = 20
// console.log(x)
// console.log(y)

//objects

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {  }
// }

// import lodash from 'lodash'
// var lodash = require('lodash')

// var copiedObj = originalObj // normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) // deep copy
// var copiedObj = lodash.cloneDeep(originalObj) // deep copy
// var copiedObj = Object.assign({}, originalObj) // shallow copy
// var copiedObj = {...originalObj} // shallow copy(ES-6)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(originalObj)
// console.log(copiedObj)

//Math

// console.log(Math)
// console.log(Math.min(10, 4, 20))
// console.log(Math.max(10, 4, 20))
// console.log(Math.floor(10.9))
// console.log(Math.ceil(10.1))
// console.log(Math.round(10.1))
// console.log(Math.round(10.5))
// console.log(Math.random()*100)
// console.log(Math.sqrt(9))
// console.log(Math.pow(2,10))


//Date object

// var now = new Date()
// console.log(now)
// var date1 = new Date('1947 8 15 10:30:40')
// var date2 = new Date(2050, 10, 20, 10, 30, 40 )
// console.log(date2)
// console.log(date1.getFullYear())
// date1.setFullYear(2020)
// console.log(date1)

// get


// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//set

// now.setFullYear(2047)
// now.setMonth(10)
// now.setHours(8)
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())

//Before template srting
// var name = 'sachin'
// var age = 40

// console.log('Hi this is ' + '' + name + '' + ' my age is ' +  age)

//After template srting

// console.log(`Hi this is ${name} my age is ${age}`)


//String object

var msg = 'Hi how are you'

// console.log(msg)

//How to find string length

// var length = msg.length
// console.log(length)

//how to remove (trim) white spaces in string

// var trimedMsg = msg.trim()
// var trimedMsg = msg.trimStart()
// var trimedMsg = msg.trimEnd()
// console.log(trimedMsg.length)

//How to extract / copy a part of string

// var copiedMsg = msg.slice()
// var copiedMsg = msg.slice(0)
// var copiedMsg = msg.slice(0, msg.length)
// var copiedMsg = msg.slice(0, 2)
// var copiedMsg = msg.slice(3, 6)
// var copiedMsg = msg.slice(-3)
// var copiedMsg = msg.slice(-6)
// var copiedMsg = msg.substring()
// var copiedMsg = msg.substring(0)
// var copiedMsg = msg.substring(0, msg.length)
// var copiedMsg = msg.substring(0, 2)
// var copiedMsg = msg.substring(-3)
// var copiedMsg = msg.substr(0, 2)
// var copiedMsg = msg.substr(-3)
// console.log(copiedMsg)

//How to extract a string character

// var copiedMsg = msg.charAt(0)
// var copiedMsg = msg.charCodeAt(0)
// var copiedMsg = msg.charCodeAt(3)
// console.log(copiedMsg)

//case conversion

// var msgCase = msg.toUpperCase()
// var msgCase = msg.toLowerCase()
// console.log(msgCase)

//how to replace string

// var replacedMsg = msg.replace('you', 'me')
// var replacedMsg = msg.replace('You', 'me')
// console.log(replacedMsg)

//How add new string to end of string

// var newStr = msg.concat(` sachin`)
// console.log(newStr)

//how pad new content at start and end

// var mystr = 'hello'

// var newStr = mystr.padStart(10, 5)
// var newStr = mystr.padEnd(10, 5)
// var newStr = mystr.padStart(10, 20)
// console.log(newStr)

//How to convert string into array

var msg = 'hello where are you hello'

// var arr = msg.split()
// var arr = msg.split('')
// var arr = msg.split(' ')

// console.log(arr)

// how to find specific string

// console.log(msg.indexOf('hello'))
// console.log(msg.indexOf('bye'))
// console.log(msg.lastIndexOf('hello'))
// console.log(msg.lastIndexOf('bye'))
// console.log(msg.lastIndexOf('Hello'))
// console.log(msg.includes('you'))
// console.log(msg.includes('me'))
// console.log(msg.startsWith('hello'))
// console.log(msg.startsWith('hi'))
// console.log(msg.endsWith('hello'))
// console.log(msg.endsWith('hi'))

//how to repeat string no of times


// var msg = 'sachin'

// console.log(msg.repeat(10))






