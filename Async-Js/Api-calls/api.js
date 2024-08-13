
//get all data
var getallBtn = document.getElementById('getall')


function getallData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
     return res.json()
    }).then((data) => {
    console.log(data)
  })
}

getallBtn.addEventListener('click', getallData)

//get single data
var getsingleBtn = document.getElementById('getsingle')

function getsingleData() {
  fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => {
     return res.json()
    }).then((data) => {
    console.log(data)
  })
}

getsingleBtn.addEventListener('click', getsingleData)

// send data 

var sendBtn = document.getElementById('send');

var mydata = {
  userId: 201,
  title: 'My title',
  body: 'my body'
}

function sendData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json'},
    body: JSON.stringify(mydata)
  }).then((res) => {
    console.log(res)
  })
    
}

sendBtn.addEventListener('click', sendData);

//update data

var updateBtn = document.getElementById('update');

var mydata = {
  userId: 201,
  title: 'My title',
  body: 'my body'
}

function updateData() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/json'},
    body: JSON.stringify(mydata)
  }).then((res) => {
    console.log(res)
  })
    
}

updateBtn.addEventListener('click', updateData);

//delete data

var deleteBtn = document.getElementById('delete');


function deleteData() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json'},
  }).then((res) => {
    console.log(res)
  })
    
}

deleteBtn.addEventListener('click', deleteData);