var ClozeCard = function(text, cloze) {
		if (text.indexOf(cloze) < 0) {
			console.log("ERROR! " + cloze + " does not exist in " + text); 
			return; 
		} else {
			this.fullText = text;
			this.cloze = cloze; 
			this.partial = text.replace(cloze, "____________");
		};	
};	


module.exports = ClozeCard; 