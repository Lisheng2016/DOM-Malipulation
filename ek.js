function displayAbbreviations(){
var abbreviations = document.getElementsByTagName('abbr');
//console.log(abbreviations);

var abbrtext = [],abbrtitle = [];

for(var i = 0;i < abbreviations.length;i++){
	abbrtext[i] = abbreviations[i].innerHTML;
	abbrtitle[i] = abbreviations[i].title;
}
//take out value and title
//console.log(abbrtitle,abbrtext);
var datalist = document.createElement('dl');
document.body.appendChild(datalist);

var dt = [];
var dd = [];
for(var j = 0;j < abbreviations.length;j++){
	dt[j] = document.createElement('dt');
	dd[j] = document.createElement('dd');
	dt[j].innerHTML = abbrtext[j];
	dd[j].innerHTML = abbrtitle[j];

	dt[j].appendChild(dd[j]);
	datalist.appendChild(dt[j]);

}
//do writing the DOM
document.body.appendChild(datalist);
//append finished datalist to body element
}

//function used to add events to window.onload event!!
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onlaod !== 'function'){
		window.onload = func;
	}
	else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(displayAbbreviations);