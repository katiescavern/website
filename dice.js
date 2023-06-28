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
    var naugty = ["awww naughty " + z + "~", "i thought you'd do better for me~", "looks like someone wants to be punished~", "i can't wait to tie you up~", "i'll make sure you'll want to do better next time~", "such a silly little " + z +"~", "it's like you want to be punished~", "ah, being disobedient now, are we? what a shame... i can't wait to make you beg for mercy", "is that all you got, doll? that's humiliating for you~", "even when you're trying your hardest, you're still just a dumb fuckslut. i'm almost ashamed for you~"];
    var good = ["good " + z + "~", "i'll make sure to reward you for this later~", "you're such a cutie~", "i'm going to take good care of you later~", "wow! you're doing so good for me, love!", "good " + z +"! i'm so proud of you~", "ah, you're doing great for me! you're such a good " + z + "~", "good " + z +"! i'm going to make you feel so good later~", "i'm almost.. impressed with your behaviour~", "this pleases me, pet. good "+ z + "~"];
    var max_naughty = [" you're such a naughty " + z + "~ don't worry, i'll show you your place~", "aww someone wants to be spanked~", "pathetic fucktoy, you can't do anything yourself, can you~?", "that's unfortunate. aren't you embarrassed, puppy? i'll make sure you will be~", "that was shameful. but what can I expect from such a dumb slut like you?", "don't worry, you can try again later when you're shaking with tears streaming down your face~"];
    var max_good = ["fuck you're such a perfect " + z +" for me~", "keep this up and i'll make you cum~", "my perfect, pretty little toy"];
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
