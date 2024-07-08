//How to define a function

//declaration

// function declare() {
  
// }

// declare()

//expression

// named

// var x = function declare() {

// }
// x()


// anonymous

// var y = function () {

// }
// y()

//arrow (ES-6)

// var z =  () => {

// }
// z()

//parameters vs arguments

// var a = 10

// function test(x, y='undefined') {
//   console.log(x,y)
//   // var a = 100
// }
// test(10, undefined)

//default params (ES-6)

// function test(a=10) {
  
// }
// test(undefined)

//varying no of params vs arguments

//arguments (ES-5)

// function vary() {
//   // console.log(a + b + c)
//   console.log(Array.isArray(arguments))

//   var sum = 0
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])
//   for (var value of arguments) {
//     // console.log(value)
//     sum += value
//   }
//   return sum
// }

// console.log(vary(1,2,3,4,5))


//rest operator(ES-6)
// var vary = (...rest) => {
//   var sum = 0
//   console.log(rest)
//   for (var value of rest) {
    // console.log(value)
//     sum += value
//   }
//   return sum
// }
// console.log(vary(1,2,3,4,5))





