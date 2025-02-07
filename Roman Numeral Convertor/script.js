const userNumBox = document.getElementById("number");
const resultBox = document.getElementById("output");
const submitBtn = document.getElementById("convert-btn");
const rulesText = document.getElementById("rules")
const romanTable = document.getElementById("rules-table")


const glyphs = [
	[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"],
	[90, "XC"], [50, "L"], [40, "XL"], [10, "X"], 
	[9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
	];

const toRoman = num => {
	//Declaration of return string
	let convNum = num;
	//Check input
	if (convNum === "") {
		return "Please enter a valid number";
	}
	if (convNum > 3999) {
		return "Please enter a number less than or equal to 3999";
	}
	if (convNum < 0) {
		return "Please enter a number greater than or equal to 1";
	}

	let retStr = "";
	//for...of loop using deconstruction for doubles
	for (const [key, value] of glyphs) {
		while (convNum >= key) {
			//while loop (for later - maybe just change to if?)
			//adds symbol n times to return string where n equals the number of times it is divisible by the int
			//changes num to remainder i.e ends current iteration
			retStr += value.repeat(Math.floor(convNum/key));
			convNum %= key;
		}
	}
	return retStr;
};

submitBtn.addEventListener("click", (e) => e.preventDefault());
submitBtn.addEventListener("click", () => {
  resultBox.innerText = toRoman(userNumBox.value);
  rulesText.style.display = "none";
  romanTable.style.display = "none";
  resultBox.style.display = "block";
})
