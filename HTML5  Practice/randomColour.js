fntion init(){
	
 var h1tags = document.getElementsbyTagName("h1");	
 
h1tags[0].onclick = changeColour;
}

function changeColour(){
	this.innerHTML = "Click Again";
	
	var randomcolour = '#'+Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomcolour;
}

onload = init;