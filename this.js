//js file for testing nextSibling
function getNextElement(node){
	if(node.nodetype == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
fhlist = document.getElementsByTagName('h1');
thi = fhlist[0]
next = getNextElement(thi);
console.log(next);