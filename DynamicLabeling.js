//File for DOM-Malipulation Demo
function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "<p>";
	document.write(str);
}

function insertDiv(){
	var divHtml = document.getElementById('testdiv');
    divHtml.innerHTML = '<p>This is <em>my</em> content</p>';
}

function createPara(){
	para = document.createElement("p");
	para.innerHTML = "This is a test insertParagraph!!"
	var info = "New element is a node of:"
	info += para.nodeName;
	info += "with nodetype of:";
	info += para.nodeType;
	//alert(info);
};

function appendPara(){
	var testDiv = document.getElementById('testdiv');
	testDiv.appendChild(para);
}

function paraCreateTN(){
	var text = document.createTextNode("This is a test textNode!!!");
	para.appendChild(text);
}

function addLoadEvent(func){
	var oldonload = window.onload;
	if((typeof oldonload )!=='function'){
		window.onload = func;
	}
	else {
		window.onload = function (){
			oldonload();
			func();
		}
	}
}
addLoadEvent(createPara);
addLoadEvent(paraCreateTN);
addLoadEvent(appendPara);


