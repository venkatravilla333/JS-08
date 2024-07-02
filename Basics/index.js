// console.log('Sachin')


// variables and data types
// console.log(a)
var a = 'Sachin'
console.log(a, typeof a)

var b = 40

console.log(b, typeof b)
var c = true
console.log(c, typeof c)

var d 
console.log(d, typeof d)

var e = null
console.log(e, typeof e)

var f = {
  name: 'Kohli',
  age: 30,
  address: 'Delhi'
}
console.log(f, typeof f)

var g = [1, 2, 3, 4, 5]

console.log(g, typeof g)


//functions

function declare() {
  var a = 100

}
declare()
console.log(declare, typeof declare)
var named = function test() {
    var x = 10
}
named()
console.log(named, typeof named)
var anony = function() {
    var y = 10
}
anony()
var arrow = ()=>{
    var z = 10
}
arrow()
console.log(arrow, typeof arrow)