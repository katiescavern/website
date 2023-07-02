//elements
var popUp = document.getElementById("startScreen");
var everything = document.getElementById("everything");
var lifetimeChickenCount = 0;
const buttons = document.createElement("button");
const coopElement = document.getElementById("actualCoop");
var chickenCount = 0;
var selectedChicken1;
var selectedChicken2;
const baseDNA = {
  	G: { eggLaying: 3, meatPrice: 2, meatSize: 1, beauty: 0 },
  	A: { eggLaying: 0, meatPrice: 3, meatSize: 2, beauty: 1 },
  	C: { eggLaying: 1, meatPrice: 0, meatSize: 3, beauty: 2 },
  	T: { eggLaying: 2, meatPrice: 1, meatSize: 0, beauty: 3 }
};

const nameElement = document.getElementById("name");
const DNAElement = document.getElementById("DNA");
const eggP = document.getElementById("eggPoints");
const eggS = document.getElementById("eggString");
const priceP = document.getElementById("pricePoints");
const priceS = document.getElementById("priceString");
const sizeP = document.getElementById("sizePoints");
const sizeS = document.getElementById("sizeString");
const beautyP = document.getElementById("beautyPoints");
const beautyS = document.getElementById("beautyString");
const sexElement = document.getElementById("sex");
const ageElement = document.getElementById("age");
const infoElement = document.getElementById("info");
const buttonElement = document.getElementById("buttons");
const selchick1 = document.getElementById("selChick1");
const selchick2 = document.getElementById("selChick2");
//element things
everything.style.display = "none";

//variables
var chickens = [];
//dna

//functions
function start(){
	popUp.style.display = "none";
	everything.style.display = "block";
	infoElement.style.display = "none";
	buttonElement.style.display = "none";
	randomChicken();
	randomChicken();
	chickenRefresh();
}


function randomChicken(){
	let DNA = [];


	for (let i = 0; i <16; i++){
		let singleDNA = (Math.floor(Math.random()*4))+1;
		if (singleDNA == 1){
			singleDNA = "A";
		} else if (singleDNA == 2){
			singleDNA = "C";
		} else if (singleDNA == 3){
			singleDNA = "G";
		} else if (singleDNA == 4){
			singleDNA = "T";
		}
		DNA.push(singleDNA);
	}
	let eggStrand = [];
	let layingPoints = 0;
	for (let j = 0; j < 4; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].eggLaying;
		layingPoints += points;
		eggStrand.push(letter);
	}

	let priceStrand = [];
	let pricePoints = 0;
	for (let j = 4; j < 8; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].meatPrice;
		pricePoints += points;
		priceStrand.push(letter);
	}

	let sizeStrand = [];
	let sizePoints = 0;
	for (let j = 8; j < 12; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].meatSize;
		sizePoints += points;
		sizeStrand.push(letter);
	}

	let beautyStrand = [];
	let beautyPoints = 0;
	for (let j = 12; j < 16; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].beauty;
		beautyPoints += points;
		beautyStrand.push(letter);
	}
	let sex;
	if (lifetimeChickenCount == 0){
		sex = "female";
	} else if (lifetimeChickenCount == 1){
		sex = "male";
	} else {
	sex = Math.floor(Math.random()*2);
	}

	if (sex == 0){
		sex = "female";
	} else if (sex == 1){
		sex = "male";
	}

	let canLayEggs = true;
	if (sex == "male" || layingPoints == 0){
		canLayEggs = false;
	}
	let name = chickenNaming();
	const newChicken = {
		reference: 'Chicken' + lifetimeChickenCount,
		DNA: DNA,
		name: name,
		eggStrand: eggStrand,
		eggLayingPoints: layingPoints,
		priceStrand: priceStrand,
		pricePoints: pricePoints,
		sizePoints: sizePoints,
		sizeStrand: sizeStrand,
		beautyStrand: beautyStrand,
		beautyPoints: beautyPoints,
		sex: sex,
		canLayEggs: canLayEggs,
		age: "adult"
		};
		lifetimeChickenCount++;
		chickens.push(newChicken);
		chickenCount++;
		chickenRefresh();
}
function showInfo(a){
	infoElement.style.display = "block";
	buttonElement.style.display = "block";
	nameElement.textContent = chickens[a].name;
	eggP.textContent = chickens[a].eggLayingPoints;
	eggS.textContent = chickens[a].eggStrand;
	priceP.textContent = chickens[a].pricePoints;
	priceS.textContent = chickens[a].priceStrand;
	sizeP.textContent = chickens[a].sizePoints;
	sizeS.textContent = chickens[a].sizeStrand;
	beautyP.textContent = chickens[a].beautyPoints;
	beautyS.textContent = chickens[a].beautyStrand;
	sexElement.textContent = chickens[a].sex;
	ageElement.textContent = chickens[a].age;
	if (a != selectedChicken1){
		selectedChicken2 = selectedChicken1;
		selectedChicken1 = a;

	}
	selchick1.textContent = "selected chicken 1: " + chickens[selectedChicken1].name;
	selchick2.textContent = "selected chicken 2: " + chickens[selectedChicken2].name;

}

function breed(){
	
	if(chickens[selectedChicken1].sex != chickens[selectedChicken2].sex){
		let DNA = [];
		for (let i = 0; i < 16; i++){
			let parent = (Math.floor(Math.random()*2))+1;
				let string;
			if (parent == 1){
				string = chickens[selectedChicken1].DNA;
			} else if (parent == 2){
				string = chickens[selectedChicken2].DNA;
			}
			let letter = string[i]
			DNA.push(letter);
		}
	
	let eggStrand = [];
	let layingPoints = 0;
	for (let j = 0; j < 4; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].eggLaying;
		layingPoints += points;
		eggStrand.push(letter);
	}

	let priceStrand = [];
	let pricePoints = 0;
	for (let j = 4; j < 8; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].meatPrice;
		pricePoints += points;
		priceStrand.push(letter);
	}

	let sizeStrand = [];
	let sizePoints = 0;
	for (let j = 8; j < 12; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].meatSize;
		sizePoints += points;
		sizeStrand.push(letter);
	}

	let beautyStrand = [];
	let beautyPoints = 0;
	for (let j = 12; j < 16; j++){
		let letter = DNA[j];
		let points = baseDNA[letter].beauty;
		beautyPoints += points;
		beautyStrand.push(letter);
	}
	let sex;
	if (lifetimeChickenCount == 0){
		sex = "female";
	} else if (lifetimeChickenCount == 1){
		sex = "male";
	} else {
	sex = Math.floor(Math.random()*2);
	}

	if (sex == 0){
		sex = "female";
	} else if (sex == 1){
		sex = "male";
	}

	let canLayEggs = true;
	if (sex == "male" || layingPoints == 0){
		canLayEggs = false;
	}
	let name = chickenNaming();
	const newChicken = {
		reference: 'Chicken' + lifetimeChickenCount,
		DNA: DNA,
		name: name,
		eggStrand: eggStrand,
		eggLayingPoints: layingPoints,
		priceStrand: priceStrand,
		pricePoints: pricePoints,
		sizePoints: sizePoints,
		sizeStrand: sizeStrand,
		beautyStrand: beautyStrand,
		beautyPoints: beautyPoints,
		sex: sex,
		canLayEggs: canLayEggs,
		age: "adult"
		};
		lifetimeChickenCount++;
		chickens.push(newChicken);
		chickenCount++;
		chickenRefresh();
	}
}

function chickenRefresh(){
	while (coopElement.firstChild) {
    	coopElement.removeChild(coopElement.firstChild);
  	}
	for (let i = 0; i < chickenCount; i++) {
  		const para = document.createElement("button");
  		const node = document.createTextNode(chickens[i].name);
  		para.appendChild(node);
  		para.onclick = function() {
      	showInfo(i);
    	}; 
    	coopElement.appendChild(para);
}
}

function chickenNaming(){
	const chickenNames = [
  'Feather', 'Sunny', 'Coco', 'Pippin', 'Peanut', 'Scout', 'Biscuit', 'Waffle', 'Marshmallow',
  'Sprout', 'Noodle', 'Pepper', 'Clove', 'Bean', 'Bumble', 'Crispy', 'Tumble', 'Petal', 'Whisper',
  'Caramel', 'Marble', 'Cinnamon', 'Pebble', 'Jazz', 'Fizz', 'Ziggy', 'Sage', 'Pickle', 'Echo',
  'Puff', 'Truffle', 'Harmony', 'Breeze', 'Puddle', 'Glimmer', 'Muffin', 'Spark', 'Doodle', 'Petal',
  'Sprinkle', 'Jumble', 'Nugget', 'Peach', 'Ripple', 'Sorbet', 'Popcorn', 'Twinkle', 'Ginger',
  'Moon', 'Shadow', 'Starling', 'Cloud', 'Tater', 'Quill', 'Nimbus', 'Cobalt', 'Saffron', 'Citrine',
  'Garnet', 'Indigo', 'Slate', 'Storm', 'Willow', 'Midnight', 'Lemon', 'Pine', 'Slate', 'Maple',
  'Rowan', 'Juniper', 'Thyme', 'Wren', 'River', 'Cedar', 'Hazel', 'Cypress', 'Finch', 'Lark',
  'Rooster', 'Hen', 'Chick', 'Clucky', 'Breezy', 'Cheddar', 'Cricket', 'Daisy', 'Dusty', 'Flame',
  'Gingersnap', 'Happy', 'Honey', 'Jellybean', 'Mango', 'Mercury', 'Oreo', 'Peanut Butter', 'Puddle',
  'Roo', 'Sesame', 'Sherbet', 'Silkie', 'Sky', 'Snickerdoodle', 'Squash', 'Sunflower', 'Teacup',
  'Tofu', 'Velvet', 'Waffles', 'Zephyr', 'Blaze', 'Bluebell', 'Butterscotch', 'Chime', 'Comet',
  'Dandelion', 'Doodlebug', 'Evergreen', 'Firefly', 'Frost', 'Gizmo', 'Hickory', 'Jazzberry', 'Lucky',
  'Misty', 'Nimbus', 'Parsley', 'Pebbles', 'Peppermint', 'Pippin', 'Quirky', 'Raindrop', 'Raven',
  'Skittles', 'Sprig', 'Squiggle', 'Taffy', 'Tango', 'Thunder', 'Whiskers'
];
  const randomIndex = Math.floor(Math.random() * chickenNames.length);
  return chickenNames[randomIndex];
}