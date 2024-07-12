//1

// console.log(10==10)
// console.log(10==10==10)
// console.log(10==10==10==10)
// console.log(10 == 10 == 10 == false)

//2

// function outer() {
//   var x = 1
//   function inner() {
//    return x++
//   }
//   return inner
// }

// var inner1 = outer()
// var inner2 = outer()
// console.log(inner1())
// console.log(inner1())
// console.log(inner2())
// console.log(inner2())

//3

// console.log(a)
// function test() {
//   a = 100
//   console.log(a)
// }

// test()
// let a = 10


//first class function

// var x = function firstClassFun(cb) {
//   return function y() {
    
//   }
// }

// x(function test(){})

//HOF & CBF

// function Hof(cb) {
//   console.log('hello')
//   function y() {
    
//   }
//   cb()
//   return y
// }
// Hof(function cb() {
//   console.log('hi')
// })


//pure

// function pure(a,b,c) {
//   console.log(a+b+c)
// }

// pure(1,2,3)

//impure

// function impure(a, b, c) {
//   var d = Math.random()*10
//   console.log(a+b+c+d)
// }
// impure(1,2,3)

//recursion function


// function factorial(n) {
//   console.log(n)
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1); 
//   }
// }

// var result = factorial(5);
// console.log(result)



