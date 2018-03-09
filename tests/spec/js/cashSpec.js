it("Error: Can't be null.", function() {
	expect(withdraw(null)).toEqual("Empty Set");
});

it("Error: Can't be 0.", function() {
	expect(withdraw(0)).toEqual("Empty Set");
});

it("Error: Can't be '0' [string].", function() {
	expect(withdraw("0")).toEqual("Empty Set");
});

it("Error: Can't be empty.", function() {
	expect(withdraw("")).toEqual("Empty Set");
});

it("Error: Can't be negative.", function() {
	expect(withdraw(-130)).toEqual("InvalidArgumentException");
});

it("Error: Not valid notes [<10].", function() {
	expect(withdraw(125)).toEqual("NoteUnavailableException");
});

it("Error: User try to type a not valid character.", function() {
	expect(withdraw("a")).toEqual("Only numbers please");
});

it("Expect to: Withdraw 30 [20,10].", function() {
	expect(withdraw(30)).toEqual([20,10]);
});

it("Expect to: Withdraw 80 [50,20,10].", function() {
	expect(withdraw(80)).toEqual([50,20,10]);
});
