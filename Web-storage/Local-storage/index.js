
//how to set data in browser

var setBtn = document.getElementById('set')

function setBtnFun() {
  localStorage.setItem('name', 'kohli')
  localStorage.setItem('age', 30)
}

setBtn.addEventListener('click', setBtnFun)

//how to get data from browser

var getBtn = document.getElementById('get')

function getBtnFun() {
  var name = localStorage.getItem('name')
  var age = localStorage.getItem('age')
  console.log(name)
  console.log(age)
}

getBtn.addEventListener('click', getBtnFun)

//how to delete single value from browser

var deleteSingleBtn = document.getElementById('deleteSingle')

function deleteSingleFun() {
  localStorage.removeItem('name')
  localStorage.removeItem('age')
}

deleteSingleBtn.addEventListener('click', deleteSingleFun)

//how to delete single value from browser

var deleteAllBtn = document.getElementById('deleteAll')

function deleteAllFun() {
  localStorage.clear()
}

deleteAllBtn.addEventListener('click', deleteAllFun)
