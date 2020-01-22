var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var myAlt = myImage.getAttribute('alt');
    if (mySrc === 'images/youtube-icon.svg.png') {
      myImage.setAttribute ('src','images/mem.jpg');
      myImage.setAttribute ('alt','picture has changed');
    } else {
      myImage.setAttribute ('src','images/youtube-icon.svg.png');
    }
}

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
//   }
