

// implicit conversion

//Numeric string with + any data type => returns string

// var x = '5' + 'hello'
// console.log(x, typeof x)
// console.log('5' + 20)
// console.log('5' + true)
// console.log('5' + undefined)
// console.log('5' + null)
// var y = '5' + {}
// console.log(y, typeof y)
// console.log('5' + [])
// var z = '5' + function () { }
// console.log(z, typeof z)

// Numeric string with (-, /, %, *) any data type => returns number or NaN

// console.log('5' - 'hello')
// console.log('5' - 2)
// console.log('5' - true)
// console.log('5' - false)
// console.log('5' - undefined)
// console.log('5' - null)
// console.log('5' - {})
// console.log('5' - [])
// console.log('5' - function(){})

// Non Numeric string with (-, /, %, *) any data type => returns NaN

// console.log('hello' - 'Bye')
// console.log('hello' - 5)
// console.log('hello' - true)
// console.log('hello' - false)
// console.log('hello' - undefined)
// console.log('hello' - null)
// console.log('hello' - {})
// console.log('hello' - [])
// console.log('hello' - function(){})
// console.log('undefined' - 'hello')
// console.log(undefined - 10)
// console.log(null - 10)
// console.log(true - 10)
// console.log(false - 'hello')

//Boolean with (+, -,/,%,*) => returns number, concat, NaN

// console.log(true + false)
// console.log(true - false)
// console.log(true - undefined)
// console.log(true + undefined)
// console.log(true - null)
// console.log(true + 'hello')
// console.log(true + '5')
// console.log(true + 5)
// var a = true + {}
// console.log(a, typeof a)
// var b = true + []
// console.log(b, typeof b)
// console.log(true - function(){})
// console.log(true + function(){})

//Null with (-,/,%, *)

// console.log(null + 'hello')
// console.log(null - 'hello')
// console.log(null + 5)
// console.log(null - 5)
// console.log(null + true)
// console.log(null - true)
// console.log(null + undefined)
// console.log(null - undefined)
// console.log(null + null)
// console.log(null - null)
// console.log(null + {})
// console.log(null - {})
// console.log(null + [])
// console.log(null - [])
// console.log(null + function(){})
// console.log(null - function(){})
// console.log(null + '5')
// console.log(null - '5')

// undefined with (+,-,/,*,)

// console.log(undefined + 'hello')
// console.log(undefined - 'hello')
// console.log(undefined + 5)
// console.log(undefined - 5)
// console.log(undefined + '5')
// console.log(undefined - '5')
// console.log(undefined + true)
// console.log(undefined - true)
// console.log(undefined + undefined)
// console.log(undefined - undefined)
// console.log(undefined + null)
// console.log(undefined - null)
// console.log(undefined + {})
// console.log(undefined - {})
// console.log(undefined + [])
// console.log(undefined - [])
// console.log(undefined + function(){})
// console.log(undefined - function(){})

// Explit conversion

// var num = 10
// number into string

// console.log(num, typeof num)
// var str = String(num)
// console.log(str, typeof str)

//string into number

// var a = '10'
// console.log(a, typeof a)

// var b = Number(a)

// console.log(b, typeof b)





