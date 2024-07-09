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

function test() {

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
    }
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




