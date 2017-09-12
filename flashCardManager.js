var BasicCard = require("./BasicCard.js"); 
var ClozeCard = require("./ClozeCard.js"); 
var inquirer = require("inquirer"); 

var basicCardsDeck = []; 
var clozeCardsDeck = []; 
var counter = 0; 

basicCardsDeck[0] = new BasicCard("hello", "hola"); 
basicCardsDeck[1] = new BasicCard("good morning!", "buenos dias!"); 
basicCardsDeck[2] = new BasicCard("goodnight!", "buenas noches!");
basicCardsDeck[3] = new BasicCard("I am", "Yo soy") 
basicCardsDeck[4] = new BasicCard("Chicken", "pollo")
basicCardsDeck[5] = new BasicCard("Pig", "Cerdo") 
basicCardsDeck[6] = new BasicCard("Cow", "Vaca")  

clozeCardsDeck[0] = new ClozeCard("Yo soy intelligente", "soy"); 
clozeCardsDeck[1] = new ClozeCard("Yo estoy en casa", "estoy"); 
clozeCardsDeck[2] = new ClozeCard("El perro dice 'guao guao!", "perro"); 
clozeCardsDeck[3] = new ClozeCard("Arroz con pollo", "pollo");
clozeCardsDeck[4] = new ClozeCard("Cepillarse los dientes", "dientes");  


start();
//createBasicCards(); 
//createClozeCards();  

function start() {
	inquirer.prompt([
	{
		name: "createOrQuiz", 
		type: "rawlist", 
		message: "What woud you like to do?",
		choices: ["CREATE BASIC CARD", "CREATE CLOZE CARD", "QUIZ BASIC CARDS", "QUIZ CLOZE CARDS", "QUIT"]
	}
	]).then(function(answer) {
		if (answer.createOrQuiz.toUpperCase() === "CREATE BASIC CARD") {
			console.log("You chose to create a basic card!");
			createBasicCard(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "CREATE CLOZE CARD") {
			console.log("you chose to create a cloze card!"); 
			createClozeCard(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "QUIZ BASIC CARDS") {
			console.log("you chose to quiz the basic cards!"); 
			quizBasicCards(); 
		}
		else if (answer.createOrQuiz.toUpperCase() === "QUIZ CLOZE CARDS") {
			console.log("You are going to quiz the cloze cards!");
			quizClozeCards(); 
		}
		else {
			end(); 
		}
	});
}

function createBasicCard() {
	inquirer
		.prompt([
		{
			name: "front", 
			type: "input", 
			message: "FRONT TEXT: "	
		}, 
		{
			name: "back", 
			type: "input", 
			message: "BACK TEXT: "
		}
		]).then(function(answer) {
			var newBasicCard = new BasicCard(answer.front.toLowerCase(), answer.back.toLowerCase()); 
			basicCardsDeck.push(newBasicCard); 
			console.log("you have " + basicCardsDeck.length + " basic flashcards in your basic flashcards deck"); 
			console.log("YOUR BASIC CARDS: ");
			for(var i = 0; i < basicCardsDeck.length; i++) {
				console.log(basicCardsDeck[i].front + " --- " + basicCardsDeck[i].back);
			}
			start(); 
		});
}

function createClozeCard() {
	inquirer
		.prompt([
		{
			name: "text", 
			type: "input", 
			message: "FULL TEXT: "	
		}, 
		{
			name: "partial", 
			type: "input", 
			message: "TEXT TO HIDE: "
		}
		]).then(function(answer) {
			var newClozeCard = new ClozeCard(answer.text.toLowerCase(), answer.partial.toLowerCase()); 
			clozeCardsDeck.push(newClozeCard); 
			console.log("you have " + clozeCardsDeck.length + " cards in your cloze card deck"); 
			console.log("YOUR CLOZE CARDS: "); 
			for (var i = 0; i < clozeCardsDeck.length; i++) {
				console.log(clozeCardsDeck[i].fullText + " --- " + clozeCardsDeck[i].partial); 
			}
			start(); 
		});
}

function quizBasicCards() {
	if (counter < basicCardsDeck.length) {
		inquirer
			.prompt(
			{
				name: "userAnswer", 
				type: "input", 
				message: basicCardsDeck[counter].front
			}
			).then(function(answer) {
				if (answer.userAnswer.toLowerCase() === basicCardsDeck[counter].back.toLowerCase()) {
					console.log("you are correct! the answer is " + basicCardsDeck[counter].back); 
				}
				else {
					console.log("Sorry, the correct answer was " + basicCardsDeck[counter].back);
				}
				counter++; 
				quizBasicCards(); 
			});
		}
		else {
			counter = 0; 
			start(); 
		};
}

function quizClozeCards() {
	if (counter < clozeCardsDeck.length) {
		inquirer
			.prompt(
			{
				name: "userAnswer", 
				type: "input", 
				message: clozeCardsDeck[counter].partial
			}
			).then(function(answer) {
				if (answer.userAnswer.toLowerCase() === clozeCardsDeck[counter].cloze.toLowerCase()) {
					console.log("you are correct! the answer is " + clozeCardsDeck[counter].fullText); 
				}
				else {
					console.log("Sorry, the correct answer was " + clozeCardsDeck[counter].fullText);
				}
				counter++; 
				quizClozeCards(); 
			});
		}
		else {
			counter = 0; 
			start(); 
		};
}

function end() { 
	console.log("this session has been terminated");
};



















