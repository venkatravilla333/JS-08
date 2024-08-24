

// console.log(window)
// console.log(window.setTimeout)
// console.log(window.setInterval)
// console.log(window.clearInterval)
// console.log(window.clearTimeout)

// window.alert('hello')
// var age = window.prompt()

// console.log(age)

// if (age >= 18) {
  //   console.log('having vote')
  // } else {
    //   console.log('not having vote')
    // }
    
    // var value = confirm()
// console.log(value)
   
//how to open

var myWin
var openwin = document.getElementById('open')

var openwinFun = () => {
myWin =  window.open('', '', 'width = 600px, height = 10px')
}

openwin.addEventListener('click', openwinFun)

// how to close
var closewin = document.getElementById('close')

var closewinFun = () => {
  myWin.close()
}

closewin.addEventListener('click', closewinFun)

//how to move

var movewin = document.getElementById('move')

var movewinFun = () => {
  return myWin.moveTo(200, 200)
}
movewin.addEventListener('click', movewinFun)

//how to resize

var resizewin = document.getElementById('resize')

var resizewinFun = () => {

   return myWin.resizeTo(50, 500);
}

resizewin.addEventListener('click', resizewinFun)

    
//document object
    
// console.log(window.document)
// console.log(window.document.title)
// console.log(window.document.getElementById)
//  console.log(document.createElement('p'))
    
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// console.log(window.screen.height)
// console.log(window.screen.width)

// console.log(window.document)
// console.log(window.navigator)
// console.log(window.location)
// console.log(window.screen)
// console.log(window.history)

//Navigator object

// console.log(navigator)
// console.log(navigator.appName)
// console.log(navigator.platform)
// console.log(navigator.language)
// console.log(navigator.onLine)

// // screen object
// console.log(window.screen)
// console.log(window.screen.availHeight)
// console.log(window.screen.availWidth)
// console.log(window.screen.height)
// console.log(window.screen.width)

// //location object

// console.log(window.location)
// console.log(location.href)
// console.log(window.location.pathname)
// console.log(window.location.hostname)
// console.log(window.location.port)
// console.log(window.location.protocol)

// var loadBtn = document.getElementById('load')

// var loadNewDoc = () => {
//   window.location.assign('https://www.youtube.com');
// }

// loadBtn.addEventListener('click', loadNewDoc)

// history object


// var forwardBtn = document.getElementById('forward');

// var forwardFun = () => {
//   window.history.forward();
// };
// forwardBtn.addEventListener('click', forwardFun);


