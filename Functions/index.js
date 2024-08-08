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


//scope

//storage in global

// var a = 1
// let b = 2
// const c = 3

//access in global

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

    //storage in function

    
    // a = 100
    // console.log(a)

    // var d = 4
    // let e = 5
    // const f = 6

    // access in function which are stored in global
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // access in function which are stored in funtion
    // console.log(d)
    // console.log(e)
    // console.log(f)

    // if (true) {

        //storage in block

        // var g = 7
        // let h = 8
        // const i = 9
        
        // access in block which are stored in global
        // console.log(a)
        // console.log(b)
        // console.log(c)
        // access in block which are stored in function
        // console.log(d)
        // console.log(e)
        // console.log(f)
        // access in block which are stored in block
        // console.log(g)
        // console.log(h)
        // console.log(i)
    // }
    // access in funtion which are stored in block
    // console.log(g)
    // console.log(h)
    // console.log(i)
    
// }

// access in global which are stored in function
// console.log(d)
// console.log(e)
// console.log(f)

// access in blobal which are stored in block
// console.log(g)
// console.log(h)
// console.log(i)

// test()

//  a = 100
// console.log(a)

// console.log(a)
// {
    // console.log(a)
    // let a = 100
    // console.log(a)
// }
//  console.log(a)


//Hoisting

//all variables
// console.log(a)
// const a = 'sachin'

// console.log(b)
// var b = 40

// console.log(c)
// var c = true

// console.log(d)
// var d

// console.log(e)
// var e = null

// console.log(f)
// var f = { name: 'kohli' }

// console.log(g)
// var g = [1, 2, 3]

// // console.log(h)
// h()
// var h = function test() {
    
//     console.log('named fun exp')
// }

// console.log(i)
// var i = function () {
//     console.log('anonymous fun exp')
// }

// console.log(j)
// var j = () => {
//     console.log('arrow fun exp')
// }

// //function declaration
// declare()
// function declare() {
//     console.log('declare')
// }

//closure

// function outer() {
//     var x = 100
    
//    return function inner() {
//         console.log(x)
//     }
// }

// var inner = outer()
// inner()

//var vs let vs const

//scope

//hoisting

//re-declaration

// var x = 10
// console.log(x)

// let x = 20
// console.log(x)


//re-assignment

// const x = 10
// console.log(x)
// x = 20
// console.log(x)

//initialization

// const x = 10


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

//IIFE

// var a = 100;
// ( () => {
//         var a = 100
//     }
// )()

// console.log(b)

//Function currying

// without curry

// function a(a,b,c) {
//     console.log(a+b+c)
// }

// a(1, 2, 3)

//with curry

// function a(a) {
//     return function b(b) {
//         return function c(c) {
//             console.log(a+b+c)
//         }
//     }
// }

// a(1)(2)(3)

// without curry

// function calPrice(price, dis) {
//     var dis = price * dis
//     return dis
// }
// console.log(calPrice(1000, .1))
// console.log(calPrice(1000, .2))
// console.log(calPrice(1000, .3))
// console.log(calPrice(1000, .4))
// console.log(calPrice(1000, .5))


// with curry

// function calPrice(price) {
//     return function calDis(dis) {
//         var disAmount = price * dis
//         return disAmount
//     }
// }

// var calDis = calPrice(1000)

// console.log(calDis(.1))
// console.log(calDis(.2))
// console.log(calDis(.3))
// console.log(calDis(.4))
// console.log(calDis(.5))

//callback function


// function test(cb) {
//     cb()
// }

// test(function cb(){})


//This key word

// console.log(this)

// function test() {
//     console.log(this)
// }
// test()

// var mytest = () => {
//     console.log(this)
// }
// mytest()

// var obj = {
//     name: 'sachin',
//     play : ()=> {
//         console.log(this)
//     go = ()=> {
//         console.log(this)
//         }
//         go()
//     }
//     // play: ()=> {
//     //     console.log(this)
//     // }
// }
// var go = obj.play()
// go()


function Hello() {
    this.name = 'sachin';
    this.play = function() {
        console.log(this)
       go = ()=> {
            console.log(this)
        }
        go()
    }
    console.log(this)
}

var obj1 = new Hello()
obj1.play()














