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

var data 

function fetchData(num) {
 data = new Promise((res, rej) => {
    setTimeout(() => {
      // res({pname: 'apple', pprice: 100})
      res(num*num)
    }, 5000)
 })
  return data
}
fetchData(2).then((data1) => {
  console.log(data1);
 return fetchData(data1)
}).then((data2) => {
  console.log(data2)
  return fetchData(data2)
}).then((data3) => {
  console.log(data3)
 return fetchData(data3)
}).then((data4) => {
  console.log(data4)
})







