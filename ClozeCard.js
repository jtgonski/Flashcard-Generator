var ClozeCard = function(text, cloze) {
		if (text.indexOf(cloze) >= 0) {
			this.fullText = text;
			this.cloze = cloze; 
			this.partial = text.replace(cloze, "____________");
		} else {
			console.log("error, this cloze does not exist in the text"); 
		};	
};	


module.exports = ClozeCard; 