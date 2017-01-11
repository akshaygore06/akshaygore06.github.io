
var numSquares = 6;
var colors = [];
var colorDisplayed ;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var result = document.getElementById("result");
var headerColor = document.querySelector(".header");
var newColorBtn = document.getElementById("newColorBtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init()
{
	setModeButtons();
	settingColors();
	reset();

}


function reset(){
	colors = generateRandomColors(numSquares);
	colorDisplayed = pickColor();
	displayColor.textContent = colorDisplayed;
	
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";	
		}
		else
		{
			squares[i].style.display = "none";
		}	
	}
	newColorBtn.textContent = "New Color";
	result.textContent = "";
	headerColor.style.background = "steelblue";
}


function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);

	return colors[random];
}


function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num ; i++ )
	{
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		arr[i] = 'rgb('+r+', '+g+', '+b+')';

	}
	console.log(arr);
	return arr;
}

function setModeButtons()
{
	for (var i = 0; i < modeButtons.length; i++) {

		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Eazy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function settingColors(){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var colorPicked = this.style['background-color'];

			if(colorPicked === colorDisplayed)
			{
				for(var j = 0; j < squares.length; j++)
				{
					squares[j].style.background = colorDisplayed;
				}
				result.textContent = "Correct!!"
				headerColor.style.background = colorDisplayed;
				newColorBtn.textContent = "PLAY AGAIN?";
			}
			else
			{
				this.style.background = "#232323";
				result.textContent = "Try Again"
			}
		});

	}
}

newColorBtn.addEventListener("click",function(){
	reset();
});



