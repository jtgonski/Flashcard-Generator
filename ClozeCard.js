var ClozeCard = function(text, cloze) {
		if (text.indexOf(cloze) >= 0) {
			this.fullText = text;
			this.cloze = cloze; 
			this.partial = text.replace(cloze, "____________");
		} else {
			console.log("ERROR! " + cloze + " does not exist in " + text); 
		};	
};	


module.exports = ClozeCard; 