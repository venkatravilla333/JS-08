

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

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

//How to loop array items

// var arr = [1,2,3,4,5]

// for (var value of arr) {
//   console.log(value)
// }
// for (var keys in arr) {
//   console.log(keys, arr[keys])
// }

// arr.forEach((value, index) => {
//   console.log(value, index)
// })

//how to merge

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = [6, 7, 8, 9, 10]

//concat (ES-5)

// var combineArr = arr1.concat(arr2)
// var combineArr = arr1.concat(arr2, [100,200,300])
// console.log(combineArr)

//spread operator (ES-6)

// var combineArr = [...arr1, ...arr2, 100,200]
// console.log(combineArr)

//How to find elements in array

// var arr = [1,2,3,4,2, 5,2]

//primitive

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

//reference

// var arr = [{ course: 'react' }, { course: 'css' }, { course: 'css' }];

// console.log(arr.find((obj) => {
//   return obj.course === 'java'
// }))

// console.log(arr.findIndex((obj) => {
//   return obj.course === 'css'
// }))

//how to copy

// var originalArr = ['sachin', { road: 101 }, function play() { }]


// copy

// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr))  //deep copy

// var copiedArr = Object.assign([], originalArr) //shallow copy

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201
// console.log(originalArr)
// console.log(copiedArr)


// var arr = [1, 2, -3, 4, 5, 0, -2, ]

// console.log(arr)

//filter

// var filteredResult = arr.filter((item) => {
//   return item > 0
// })

// console.log(filteredResult)

//testing of array items

// some

// console.log(arr.some((item) => {
//  return  item > 0
// }))


//every

// console.log(arr.every((item) => {
//  return  item > 0
// }))

//map

// var mapResult = arr.map((item) => {
//   return item*100
// })
// console.log(mapResult)


//forEach

// var forEachRes = arr.forEach((v, i) => {
//   // console.log(v, i)
//   return 100
// })

// console.log(forEachRes)