// console.log('hi')
// console.log('hello')
// console.log('bye')

// sync & async

// console.log('one')

// setTimeout(() => {
//   console.log('timer-1')
// }, 5000)

// setTimeout(() => {
//   console.log('timer-2')
// }, 0)

// Promise.resolve().then(() => console.log('pr-1')).then(() => console.log('pr-2'))

// console.log('bye')

// setTimeout(() => {
//   console.log('timer-3')
// }, 1000)


//callbacks

// var data

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // data = { pname: 'Apple', price: 100 }
//     data = num*num
//     displayData(data)
//   }, 5000)

// }
// fetchData(2, (data1)=> {
//   console.log(data1);
//   fetchData(data1, (data2) => {
//     console.log(data2)
//     fetchData(data2, (data3) => {
//       console.log(data3);
//        fetchData(data3, (data4) => {
//          console.log(data4);
//           fetchData(data4, (data5) => {
//             console.log(data5);
//           });
//        });
//     });
//   } )
// });

// var data

// function fetchData(num) {
//  data = new Promise((res, rej) => {
//     setTimeout(() => {
//       // res({pname: 'apple', pprice: 100})
//       res(num*num)
//     }, 5000)
//  })
//   return data
// }
// fetchData(2).then((data1) => {
//   console.log(data1);
//  return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//  return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })



// function fetchData(num) {
// return new Promise((res, rej) => {
//     setTimeout(() => {
//     //  data = res({pname: 'apple', pprice: 100})
//      data = res(num*num)
//     }, 5000)
//  })
  
// }

// async function displayData() {
//  var data1 = await fetchData(2)
//  console.log(data1)
//  var data2 = await fetchData(data1)
//  console.log(data2)
//  var data3 = await fetchData(data2)
//  console.log(data3)
//  var data4 = await fetchData(data3)
//  console.log(data4)
//  var data5 = await fetchData(data4)
//  console.log(data5)
// }
// displayData()

var pr1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('pr-1')
  }, 2000)
})
var pr2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('pr-2 failure')
  }, 0)
})
var pr3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('pr-3')
  }, 10000)
})

// Promise.race([pr1, pr2, pr3]).then((result) => { console.log(result) })

// Promise.all([pr1, pr2, pr3]).then((result) => { console.log(result) })

// Promise.allSettled([pr1, pr2, pr3]).then((result) => { console.log(result) })







