//How to examine dom

// console.log(document)
// console.dir(document)

//How to read dom properties

// console.log(document.title)
// console.log(document.URL)
// console.log(document.domain)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)

//How to access dom nodes /elements

//id
// var h1 = document.getElementById('myid')

// class
// var h1 = document.getElementsByClassName('myclass')

// tag
// var h1 = document.getElementsByTagName('h1')

//querySelector
// var h1 = document.querySelector('.myclass')

//querySelectorAll
// var h1 = document.querySelectorAll('h1')

// console.log(h1)

// h1[0].textContent = 'Sachin'
// h1[1].textContent = 'Kohli'
// h1.style.background = 'yellow'

//Traversing of DOM

// var mydiv = document.getElementById('mydiv')
// console.log(mydiv)
// mydiv.style.background = 'yellow'


//traversing to parent

// var myparent = mydiv.parentElement

// console.log(myparent)
// myparent.style.background = 'blue'

//traversing to siblings

// var preSibling = mydiv.previousElementSibling

// preSibling.style.background = 'red'

// var nextSibling = mydiv.nextElementSibling

// nextSibling.style.background = 'cyan'


//traversing to childs

// var firstChild = mydiv.firstElementChild

// firstChild.style.background = 'white'

// var lastChild = mydiv.lastElementChild

// lastChild.style.background = 'orange'

// var childs = mydiv.children

// console.log(childs)
// childs[0].style.background = 'black'
// childs[1].style.background = 'black'


//DOM Manipulation (ADD | UPDATE | DELETE)

//How to create element by using js

// var para = document.createElement('p')
// console.log(para)

// para.id = 'myid'
// para.className = 'myclass'

// para.textContent = 'This is para'

// var textContent = document.createTextNode('This is para')

// // console.log(textContent)

// para.appendChild(textContent)


//ADDING TO DOM
// var body = document.getElementById('body')
// console.log(body)


// body.appendChild(para)

// var h4 = document.createElement('h4')

// h4.id = 'myh4'

// h4.textContent = 'This is heading four'

// body.appendChild(h4)

// var h2 = document.createElement('h2')
// h2.id = 'myh2'

// h2.textContent = 'This is heading two'

// body.insertBefore(h2, para)

//REPLACE TO DOM

// var div = document.createElement('div')

// div.id = 'mydiv'

// div.textContent = 'This is my div'

// body.replaceChild(div, para)

//DELETE FROM DOM

// h2.remove()

// body.removeChild(h2)

//How to attach to DOM elements

var btn = document.createElement('button')

btn.id = 'mybtn'

btn.textContent = 'Click'

var body = document.getElementById('body')

body.appendChild(btn)

function test() {
  console.log('clicked')
  
}

btn.addEventListener('click', test)




