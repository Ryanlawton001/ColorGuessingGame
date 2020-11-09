var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebutton = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();

reset();
}
function setupSquares(){
	for(var i = 0 ; i < squares.length; i++){
	//add intitial colours to sqiares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColours(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}

function setupModeButtons(){
	for(var i = 0; i < modebutton.length; i++){
	modebutton[i].addEventListener("click", function(){
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");
		/*Ternary Operator */
		this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
		reset();
	});
}
}
for(var i = 0; i < modebutton.length; i++){
	modebutton[i].addEventListener("click", function(){
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");
		/*Ternary Operator */
		this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
	/*	if(this.textContent === "Easy"){
			numberOfSquares = 3;
		}else {
			numberOfSquares = 6
		}
		*/
		reset();
	});
}
function reset(){
	colors = generateRandomColours(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	for(var e = 0; e < squares.length; e++){
		if(colors[e]){
			squares[e].style.display = "block";
			squares[e].style.backgroundColor = colors[e];;
	}else {
		squares[e].style.display = "none";
	}}
	h1.style.backgroundColor = "steelblue";
}
/*
easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberOfSquares = 3
	colors = generateRandomColours(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
})
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberOfSquares = 6;

colors = generateRandomColours(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})
*/
resetButton.addEventListener("click", function(){
	reset();
})
function changeColours(colour){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColours(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColour());
	}
	return arr;
}
function randomColour(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
