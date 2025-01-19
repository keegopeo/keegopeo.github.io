const rngBtn = document.getElementById("rng-btn");
const numElmt = document.getElementById("random-number");
let minNum = 0;
let maxNum = 1000;

function changeNumber() {
	const userMin = Number(document.getElementById("min").value);
	const userMax = Number(document.getElementById("max").value);
	if ((userMin || userMin === 0) && userMax) {
		minNum = userMin;
		maxNum = userMax;
	}
	const num = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
	numElmt.innerHTML = 
		`<p>Range: ${minNum} to ${maxNum} <br/>Your Number Is:</p>
		<h2>${num}</h2>`;
	numElmt.style.display = "block";
}

const colours = ["purple", "pink", "cyan", "green", "red", "orange"];

function getColour(coloursArray) {
	return coloursArray[Math.floor(Math.random() * coloursArray.length)];
}

function changeBtnBorder() {
	const colour  = getColour(colours)
	rngBtn.style.border = "1.5px solid " + colour;	
	rngBtn.style.boxShadow = "2.5px 2.5px 10px " + colour;
	rngBtn.style.color = colour;
}

function resetBtnBorder() {
	rngBtn.style.border = "none";
	rngBtn.style.boxShadow = "none";
}

rngBtn.addEventListener("click", changeNumber);
rngBtn.addEventListener("mouseover", changeBtnBorder);
rngBtn.addEventListener("mouseleave", resetBtnBorder);
rngBtn.addEventListener("click", function(event) {
	event.preventDefault();
});
