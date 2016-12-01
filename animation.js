//file for animation
function positionMessage(){
	var elem = document.getElementById('message');
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement('message',200,200,10);
}

// function moveMessage(){
// 	var elem = document.getElementById('message');
// 	var xpos = parseInt(elem.style.left);
// 	var ypos = parseInt(elem.style.top);
// 	if(xpos == 200 && ypos ==200 ){
// 		return true;
// 	}
// 	if(xpos < 200){
// 		xpos++;
// 	}
// 	if(xpos > 200){
// 		xpos--;
// 	}

// 	if(ypos<100){
// 		ypos++;

// 	}
// 	if(ypos>100){
// 		ypos--;
// 	}
// 	elem.style.left = xpos + "px";
// 	elem.style.top = ypos + "px";
// 	//movement = setTimeout("moveMessage()",10);
	
// }

function moveElement (elementID,finalX,finalY,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	 var elem = document.getElementById(elementID);
	 //elem.style.position = "absolute";
	 var xpos = parseInt(elem.style.left);
	 var ypos = parseInt(elem.style.top);
	 //console.log(xpos);
	 if(xpos == finalX && ypos == finalY){
	 	return true;
	 }
	 if(xpos <finalX){
	 	xpos++;
	 }
	 if(xpos >finalX){
	 	xpos--;
	 }
	 if(ypos < finalY){
	 	ypos++;
	 }
	 if(ypos >finalY){
	 	ypos--;
	 }
 	elem.style.top = String(ypos) + "px";
 	elem.style.left = String(xpos) + "px";
 	console.log(xpos);
 	//moveMent = moveElement(elementID,finalX,finalY,interval)
 	var repeat = "moveElement('"+elementID+"',"+finalX+","+finalY+","+interval+");";
 	movement = setTimeout(repeat,interval);
}


addLoadEvent(positionMessage);