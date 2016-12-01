// javascript file for PhotoGallery
function changePic(whichPic){
	//change picture
	var source = whichPic.getAttribute('href');
	//alert(source);
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);

	//change show text
	var text = whichPic.firstChild.nodeValue;
	//alert(text);
	var description = document.getElementById('description');
	description.childNodes[0].nodeValue = text;
	
}

function showPic(whichpic){
	if(!document.getElementById('placeholder')) return false;
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',souce);

	if(document.getElementById('description')){
		var text = whichpic.getAttribute('title')?whichpic.getAttribute('title'):"";
		var description = document.getElementById('description');
		description.firstChild.nodeValue = text;
	}
	return true;
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById('imagegallery')) return false;
	var gallery = document.getElementById('imagegallery');
	var links = document.getElementsByTagName('a');
	for(i=0;i<links.length;i++){
		// links[i].onclick = function(){
		// 	if(showPic(this)){
		// 		return false;
		// 	}
		// 	else {
		// 		return true;
		// 	}
		// }
		links[i].onclick = function(){
			return showPic(this)? false:true;
		}
		// links[i].onkeypress = function(){
		// 	return showPic(this)? false:true;
		// }
		//links[i].onkeypress = links[i].onclick;
	}

}