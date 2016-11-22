//Javascript file for CreateElement.js
function preparePlaceholder(){
	var placeholder = document.createElement('img');
	placeholder.id = 'placeholder';
	//the same outcome of placeholder.setAttribute('id','placeholder');
	placeholder.src = 'images/placeholder.gif';
	placeholder.alt = 'my photo gallery';

	var description = document.createElement('p');
	description.id = 'description';
	var text = document.createTextNode('Choose an image');
	description.appendChild(text);
	
	//collect gallery ul element
	var gallery = document.getElementById('imageGallery');
	
	//insert elements!
	
	insertAfter(placeholder,gallery);
	insertAfter(description,gallery);
	
	// document.body.appendChild(placeholder);
	// document.body.appendChild(description);
	//'document.body' is equal to document.getElementsByTagName('body');
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(targetElement === parent.lastChild){
		parent.appendChild(newElement);
		//alert(1);
	}
	else {
		//alert(0);
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

window.onload = preparePlaceholder;

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.load !== 'function'){
		window.onload = func;
	}
	else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
