var BasicCard = require("./BasicCard.js"); 
var ClozeCard = require("./ClozeCard.js"); 
var inquirer = require("inquirer"); 

var hello = new BasicCard("Hello", "Hola"); 
var goodMorning = new BasicCard("Good Morning!", "Buenos Dias!"); 
var goodNight = new BasicCard("Goodnight!", "Buenas Noches!");
var iAm = new BasicCard("I am (a student)", "Yo soy (un/a estudiante)") 

var soy = new ClozeCard("Yo soy intelligente", "soy"); 
var estoy = new ClozeCard("Yo estoy en casa", "estoy"); 

console.log(hello.front); 
console.log(soy.partial); 


inquirer.prompt([

	]).then(function(answers) {
		
	})