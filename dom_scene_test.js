const start_game_area = document.querySelector('.start_game');
const start_game_button = document.querySelector('#start_button');
const main_container = document.querySelector('.container');
const how_to_play = document.querySelector('.how_to');
const how_to_button = document.querySelector('#how_toButton')
const easy_ = document.querySelector('.easy');
const easyButton = document.querySelector('#easy_button')
const medium_ = document.querySelector('.medium');
const mediumButton = document.querySelector('#medium_button')
const hard_ = document.querySelector('.hard');
const hardButton = document.querySelector('#hard_button')
//testing hover capabilites through dom, can just do csss instead
start_game_button.addEventListener("mouseenter",() =>{
	start_game_button.style.backgroundColor = "Yellow";
	start_game_button.style.color = "#ff6b63";
});

start_game_button.addEventListener("mouseleave",() =>{
	start_game_button.style.backgroundColor = "#ff6b63";
	start_game_button.style.color = "white";
});


start_game_button.addEventListener("click",() =>{

	//Hide the intial start game button and disable that div
	start_game_area.disabled = "true";
	start_game_area.style.display = "none";
	how_to_play.disabled = "true";
  how_to_play.style.display = "none";
	easyButton.style.display = "none";
	mediumButton.style.display = "none";
	hardButton.style.display = "none";
	console.log("I clciked");

	//Now create a new div where I have a line of text for example (will be replaced by a game scene maybe?)
	//Then create a reset button
	const div_head = document.createElement("h1");
div_head.classList.add("div_head");
div_head.textContent = "Change of scene";
main_container.appendChild(div_head);
reset_button = document.createElement("button");
reset_button.textContent = "back to Main Menu";
reset_button.classList.add("reset_button");
main_container.appendChild(reset_button);

	//give reset button functionality
	//Remove the newly created div (game scene) and remove itself
	//Bring back the original start game button and its div
reset_button.addEventListener("click",()=>{
	console.log("clicked reset button");
	div_head.remove();
	reset_button.remove();
start_game_area.disabled = "false";
start_game_area.style.display = "block";
how_to_play.disabled = "false";
how_to_play.style.display = "block";
easyButton.style.display = "block";
mediumButton.style.display = "block";
hardButton.style.display = "block";
});

});
