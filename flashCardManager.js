var BasicCard = require("./BasicCard.js"); 
var ClozeCard = require("./ClozeCard.js"); 
var inquirer = require("inquirer"); 

var hello = new BasicCard("Hello", "Hola"); 
var goodMorning = new BasicCard("Good Morning!", "Buenos Dias!"); 
var goodNight = new BasicCard("Goodnight!", "Buenas Noches!");
var iAm = new BasicCard("I am (a student)", "Yo soy (un/a estudiante)") 

var soy = new ClozeCard("Yo soy intelligente", "soy"); 
var estoy = new ClozeCard("Yo estoy en casa", "estoy"); 

var basicCardsDeck = []; 
var clozeCardsDeck = []; 
var counter = 0; 

console.log(hello.front); 
console.log(soy.partial); 

for(var i = 0; i < basicCardsDeck.length; i++) {
		console.log("card" + i + ": " + basicCardsDeck[i].front);
	};
//start();
createBasicCard(); 

//createClozeCard();  

function start() {
	inquirer.prompt([
	{
		name: "createOrQuiz", 
		type: "rawlist", 
		message: "What woud you like to do?",
		choices: ["CREATE BASIC CARD", "CREATE CLOZE CARD", "QUIZ BASIC CARDS", "QUIZ CLOZE CARDS"]
	}
	]).then(function(answer) {
		if (answer.createOrQuiz.toUpperCase() === "CREATE BASIC CARD") {
			console.log("You chose to create a basic card!");
			//createBasicCards(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "CREATE CLOZE CARD") {
			console.log("you chose to create a cloze card!"); 
			//createClozeCards(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "QUIZ BASIC CARDS") {
			console.log("you chose to quiz the basic cards!"); 
			//quizBasicCards(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "QUIZ CLOZE CARDS") {
			console.log("You are going to quiz the cloze cards!");
			//quizClozeCards(); 
		}
	});
}

function createBasicCard() {
	inquirer
		.prompt([
		{
			name: "front", 
			type: "input", 
			message: "Please type the text for the front of the flashcard: "	
		}, 
		{
			name: "back", 
			type: "input", 
			message: "Please type the text for the back of the flashcard: "
		}
		]).then(function(answer) {
			var newBasicCard = new BasicCard(answer.front, answer.back); 
			console.log("new card front: " + newBasicCard.front); 
			console.log("new card back: " + newBasicCard.back); 
			basicCardsDeck.push(newBasicCard); 
			console.log(basicCardsDeck.length); 

			for(var i = 0; i < basicCardsDeck.length; i++) {
				console.log("card" + i + ": " + basicCardsDeck[i].front);
			}
		});
}

function createClozeCard() {
	inquirer
		.prompt([
		{
			name: "text", 
			type: "input", 
			message: "Please type the text for the full text of the flashcard: "	
		}, 
		{
			name: "partial", 
			type: "input", 
			message: "Please type the word or phase to hide from the text: "
		}
		]).then(function(answer) {
			var newClozeCard = new ClozeCard(answer.text, answer.partial); 
			console.log("new card front: " + newClozeCard.fullText); 
			console.log("new card back: " + newClozeCard.partial); 
			clozeCardsDeck.push(newClozeCard); 
			//console.log("Cloze Card Array index 0: " + clozeCardsDeck[0].partial)
		});
}

function quizBasicCards() {

	inquirer
		.prompt(
		{
			name: "userAnswer", 
			type: "input", 
			message: basicCardsDeck[counter].front
		}
		).then(function(answer) {
			if (answer.userAnswer === basicCardsDeck[counter].back) {
				console.log("you are correct! the answer is " + basicCardsDeck[counter].back); 
			}
		})
}



















