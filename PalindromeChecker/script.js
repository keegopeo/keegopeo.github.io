const userTextBox = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");


const cleanString = string => {
	const onlyletters = /[^a-z0-9]/g;
	const newString = string.toLowerCase().replace(onlyletters, "");
	return newString;
};


const toReverse = string => {
	return string.split("").reverse().join(""); 
};


const checkPalindrome = () => {
	const cleanedText = cleanString(userTextBox.value);
	const reversedText = toReverse(cleanedText);
	resultElement.innerText = cleanedText === reversedText? `${userTextBox.value} is a palindrome`: `${userTextBox.value} is not a palindrome`;
	resultElement.style.display = "block";
};

checkButton.addEventListener("click", () => {
	if (userTextBox?.value) {
		checkPalindrome();
	} else {
		window.alert("Please input a value")
	}
})