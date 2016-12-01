function popUp(url){
	window.open(url,'popUp','width=320,height=480');

}

function linkAPop(){
	var links = document.getElementsByTagName('a');
	//console.log(links);
	for(i=0;i<links.length;i++){
		if(links[i].className === 'popUp'){
			//console.log(links[i]);
			links[i].onclick = function(){
				popUp(this.getAttribute('title'));
				return false;
			}
		}
	}
}

function chkGetTagClassName(){
	if(!document.getElementsByTagName ||!document.getElementsByClassName){
		return false;
	}
}

function prepareGallery(){
	if(!document.getElementsByTagName||!document.getElementById){
		return false;
	}n
	else {
	gallery = document.getElementsByClassName('gallery');
	console.log(gallery.length);
	if(gallery.length>0){
		for(var i=0;i<gallery.length;i++){
			var links = [];
			links[i] = gallery[i].getElementsByTagName('a');
			console.log(links[i]);
			for(var j=0;j<links[i].length;j++){
				links[i][j].onclick = function(){
					popUp(this.title);
					return false;
				}
			}
		}
	}
	}
}




window.onload = prepareGallery;