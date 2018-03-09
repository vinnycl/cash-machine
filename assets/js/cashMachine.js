//click event
document.getElementById("cashButton").addEventListener("click", function(){
	// get input value
	getInputValue = document.getElementById("cashInput").value;
	document.getElementById("cashResult").innerHTML = withdraw(getInputValue);
});


// main count function
function withdraw(amount) {
	// check if it is null, empty or 0
	if (amount === "" || amount === null || amount === "0" || amount === 0) {
		return  "Empty Set";
	}
	// if change the input
	else if (isNaN(amount)) {
		return  "Only numbers please";
	}
	// can't be less than zero
	else if (amount < 0) {
		return  "InvalidArgumentException";
	}
	// must be divided for 10
	else if (amount % 10) {
		return  "NoteUnavailableException";
	}
	else {
		//possible notes
		const notesAvailable = [100, 50, 20, 10];
		let currentTotal = 0;
		let noteNow = 0;
		let returnNotes = [];

		//loop until the value is not fulfilled
		while (currentTotal < amount) {
			currentNote = notesAvailable[noteNow];
			//calculate what is still missing
			noteCount = Math.floor((amount - currentTotal) / currentNote);
			currentTotal += noteCount * currentNote;
			if (noteCount) {
				// concatenate used notes
				returnNotes = returnNotes.concat( (new Array(noteCount)).fill(currentNote));
			}
			//incremet note
			noteNow++;
		}
		//write note result
		return returnNotes;
	}
}
