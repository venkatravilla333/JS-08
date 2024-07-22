

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new items to array

//staring

// arr.unshift('hi')
// console.log(arr)

// ending

// arr.push(100)
// console.log(arr)

//any where

// arr.splice(0, 0, 'hi')
// arr.splice(arr.length, 0, 'bye')
// arr.splice(3, 0, 'middle')
// console.log(arr)

//how to remove

//staring

// arr.shift()

// console.log(arr)

//end

// arr.pop()

// console.log(arr)

//any where

// arr.splice(2, 0, 'hi', 'hello', 200)
// console.log(arr)

//How to remove all items

// var arr2 = arr

// arr.length = 0
//  arr.splice(0, arr.length)
//  arr = []

// console.log(arr)
// console.log(arr2)

//how to merge

var arr1 = [1, 2, 3, 4, 5]

var arr2 = [6, 7, 8, 9, 10]

//concat (ES-5)

// var combineArr = arr1.concat(arr2)
// var combineArr = arr1.concat(arr2, [100,200,300])
// console.log(combineArr)

//spread operator (ES-6)

// var combineArr = [...arr1, ...arr2, 100,200]
// console.log(combineArr)

