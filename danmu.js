$(document).ready(function(){
	var paras = [];
	var i = 0;
	$('.orange').click(function(){
		var input = $("input[name='content']")
		var content = input.val();
		paras[i] = document.createElement("p");
		paras[i].innerHTML = content;
		$(".wall").append(paras[i]);
		initialXYPosition(paras[i]);
		paras[i].className = String(i);	
		moveElement(i);
		i++;
	});

	$('.grey').click(function(){
		$('p').remove();
	});
});


function initialXYPosition(element){
	element.style.position = "absolute"; 
	var xpos = 750;
	var ypos = Math.floor(380 * Math.random());
	element.style.left = String(xpos) + "px";
	element.style.top = String(ypos) + "px";
}

function moveElement(i){
	var element = document.getElementsByClassName(""+i+"")[0];
	var xpos = parseInt(element.style.left);
	var ypos = parseInt(element.style.top);
	if(xpos === -100){
		return true;
	}
	if(xpos >-100){
		xpos-=10;
	}
	element.style.left = xpos + "px";
	element.style.top = ypos + "px";
	var repeat = "moveElement('"+i+"')";
	movement = setTimeout(repeat,100);
}

