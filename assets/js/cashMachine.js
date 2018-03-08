//click event
document.getElementById("cashButton").addEventListener("click", function(){
	// get input value
	getInputValue = document.getElementById("cashInput").value;
	withdraw(getInputValue);
});


// main count function
function withdraw(amount) {
	// check if it is null empty or null
	if (amount == "" || amount == null || amount == 0) {
		document.getElementById("cashResult").innerHTML = "Empty Set";
	}
	// if change the input
	else if (isNaN(amount)) {
		document.getElementById("cashResult").innerHTML = "Only numbers please";
	}
	// can't be less than zero
	else if (amount < 0) {
		document.getElementById("cashResult").innerHTML = "InvalidArgumentException";
	}
	// must be divided for 10
	else if (amount % 10) {
		document.getElementById("cashResult").innerHTML = "NoteUnavailableException";
	}
	else {
		//possible notes
		notesAvailable = [100, 50, 20, 10];
		currentTotal = 0;
		noteNow = 0;
		returnNotes = [];

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
		document.getElementById("cashResult").innerHTML = returnNotes;
	}
}