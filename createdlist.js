// javascript file for creating dlist!!
function prepareDlist (){

var abbreviations = document.getElementsByTagName('abbr');
//get all abbr elements
//
var def = {};
for(i=0;i<abbreviations.length;i++){
	var current_abbr = abbreviations[i];
	var def_title = current_abbr.firstChild.nodeValue;
	var def_text = current_abbr.getAttribute('title');
	def[def_title] = def_text;
}

var dlist = document.createElement('dl');
document.body.appendChild(dlist);
//console.log(def);
for (var key in def){
	var d_title = document.createElement('dt');
	d_title_text = document.createTextNode(key);
	d_title.appendChild(d_title_text);
	var d_text = document.createElement('dd');
	d_text_text = document.createTextNode(def[key]);
	d_text.appendChild(d_text_text);
	dlist.appendChild(d_title);
	d_title.appendChild(d_text);
}



}

addLoadEvent(prepareDlist);