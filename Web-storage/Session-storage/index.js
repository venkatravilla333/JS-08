//how to set data in browser

var setBtn = document.getElementById('set');

function setBtnFun() {
  sessionStorage.setItem('name', 'kohli');
  sessionStorage.setItem('age', 30);
}

setBtn.addEventListener('click', setBtnFun);

//how to get data from browser

var getBtn = document.getElementById('get');

function getBtnFun() {
  var name = sessionStorage.getItem('name');
  var age = sessionStorage.getItem('age');
  console.log(name);
  console.log(age);
}

getBtn.addEventListener('click', getBtnFun);

//how to delete single value from browser

var deleteSingleBtn = document.getElementById('deleteSingle');

function deleteSingleFun() {
  sessionStorage.removeItem('name');
  sessionStorage.removeItem('age');
}

deleteSingleBtn.addEventListener('click', deleteSingleFun);

//how to delete single value from browser

var deleteAllBtn = document.getElementById('deleteAll');

function deleteAllFun() {
  sessionStorage.clear();
}

deleteAllBtn.addEventListener('click', deleteAllFun);
