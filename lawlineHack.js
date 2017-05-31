// Solution

function checkForButton() {
  var button = document.getElementsByClassName("action")[4];
  if (button) {
    button.click()
    console.log('clicked button')
  }
}

setInterval(function() {
  checkForButton()
}, 10000)

// HTML code for the sample page to create a button to click

<div class="confirm-buttons">
  <button class="action">
    <a href="#">OK</a>
  </button>
</div>

// Text of HTML to create body's content

'<div class="confirm-buttons" onclick="cons1()"><button class="action" onclick="cons2()"><a href="#" onclick="cons3()">OK</a></button></div>'

// Something to try in case the button's position in the array changes: 

function checkForButtons() {
  var divs = document.getElementsByClassName("action");
  console.log('divs', divs)
  if (divs.length > 0) {
    for (var i = 0; i < divs.length; i++) {
      if (divs[i] === 'button.action') {
        var div = divs[i];
        div.click()
        console.log('clicked 2')
      }
    }
  }
  console.log('checked 2')
}

setInterval(function() {
  checkForButtons()
}, 10000)




//
//
//
//


// Various other things I tried: 

var div1 = document.getElementsByClassName("confirm-buttons");
var content = document.createTextNode("onclick='cons4()'");
div1.appendChild(content);


// This is what worked for my sample page to get the click going

var div1 = document.getElementsByClassName("confirm-buttons")[0];
div1.setAttribute('onclick','cons4()'); // for FF
div1.click()


// Another way I saw on Stack Overflow that didn't work for me

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
var fragment = create('<div class="confirm-buttons" onclick="cons1()"><button class="action" onclick="cons2()"><a href="#" onclick="cons3()">OK</a></button></div>');
var delayAppend = setTimeout(function() {document.body.insertBefore(fragment, document.body.childNodes[0])}, 5000);


// This version of the solution didn't work, I think because 
// the "confirm buttons" <div> is much larger than the button itself

function checkForButton() {
  var div1 = document.getElementsByClassName("confirm-buttons")[0];
  if (div1) {
    div1.click()
  }
  console.log('checked')
}

//stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript

// This option will remove all listeners to the existing elements, so I didn't try it:

var div = document.getElementById('divID');

div.innerHTML = div.innerHTML + 'Extra stuff';


// More stuff from Stack Overflow that I didn't use: 

button_element.setAttribute('onclick','doSomething();'); // for FF
button_element.onclick = function() {doSomething();}; // for IE


var div1 = document.getElementsByClassName("confirm-buttons")[0];
div1.setAttribute('onclick','cons4()'); // for FF

button_element.onclick = function() {doSomething();}; // for IE

