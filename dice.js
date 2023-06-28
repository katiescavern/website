var genderElement = document.getElementById("gender");
var diceElement = document.getElementById("dice");
diceElement.style.display = "none";
var z = "";
//select gender
function gender(y){
    if (y == 1){
        z = "boy";
    } else if (y == 2) {
        z = "girl";
    } else if ( y ==3 ) {
        z = "sub";
    }
    genderElement.style.display = "none";
    diceElement.style.display = "block";
}


//dice function
var resultElement = document.getElementById("result");
var dirtyElement = document.getElementById("dirtyTalk");
function noDice(x){
    var naugty = ["awww naughty " + z + "~", "i thought you'd do better for me~", "looks like someone wants to be punished~", "i can't wait to tie you up~", "i'll make sure you'll want to do better next time~", "such a silly little " + z +"~", "it's like you want to be punished~"];
    var good = ["good " + z + "~", "i'll make sure to reward you for this later~", "you're such a cutie~"];
    var max_naughty = [" you're such a naughty " + z + "~ don't worry, i'll show you your place~", "aww someone wants to be spanked~" ];
    var max_good = ["fuck you're such a perfect " + z +" for me~", "keep this up and i'll make you cum~"];
    var result = (Math.floor(Math.random()*x))+1;
    resultElement.textContent = (result);
    if (result == x){
        dirtyElement.textContent = max_good[Math.floor(Math.random()*max_good.length)];
    } else if (result == 1){
        dirtyElement.textContent = max_naughty[Math.floor(Math.random()*max_naughty.length)];
    } else if (result > (x/2)){
        dirtyElement.textContent = good[Math.floor(Math.random()*max_good.length)];
    } else if (result <= (x/2)){
        dirtyElement.textContent = naugty[Math.floor(Math.random()*naugty.length)];

    } else {
        dirtyElement.textContent = "error";
    }
}