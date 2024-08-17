

var x = setTimeout(() => {
  console.log('timeout')
}, 4000)

console.log(x)

var timeoutBtn = document.getElementById('timeout')

function timeoutBtnFun() {
  console.log('hello')
  clearTimeout(x)
}

timeoutBtn.addEventListener('click', timeoutBtnFun)


var y = setInterval(() => {
  console.log('interval')
}, 4000)

var intervalBtn = document.getElementById('interval');

function intervalBtnFun() {
  clearInterval(y)
}

intervalBtn.addEventListener('click', intervalBtnFun);
