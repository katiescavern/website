var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
const delay = ms => new Promise(res => setTimeout(res, ms));

function startGame(){
    let intro = document.getElementById("intro");
    intro.style.display = "none";
    let button = document.getElementById("exitButton");
    setTimeout(3000);
    button.style.display = "block";
    setTimeout(fuckJS, 3000)
}
let temp = 0;
function fuckJS(){
    for(let i=0; i < 101; i++){
        temp = i;
        setTimeout(fuckJS2, 100);
    }
}

function fuckJS2(){
    let button = document.getElementById("exitButton");
    button.style.opacity = temp/100;
}
const error = document.getElementById("error");
const errorText = document.getElementById("errorText");

function aInput() {
  var aName = document.getElementById("alphaInput").value;
  if (aName === "null"){
    error.style.display = "block";
    errorText.textContent = "i bet you thought you were smart, welp that's it, you get no game.";
  } else if (aName == ""){
    let anb = document.getElementById("aNameButton");
    anb.textContent = "input again.";
  } else {
    let naming = document.getElementById("naming");
    naming.style.display = "none";
    let EA = document.getElementById("elseAlpha");
    EA.style.display = "block";
  }

}

function exit(){
  let exist = document.getElementById("exitButton");
  exist.style.display = "none";
  let naming = document.getElementById("naming");
  naming.style.display = "block";
}
