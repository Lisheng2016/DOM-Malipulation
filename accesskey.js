function accessKey(){
	var header = document.createElement('h1');
	header.innerHTML = 'AceessKey';
	document.body.appendChild(header);

	var aKeylist = new generateList('a','accesskey','ulist');

}


function generateList(tag,attribute,listName){
	var tagList= {};
	var tags = document.getElementsByTagName(tag);

	if(tags.length >= 1){
		for(var i = 0; i<tags.length;i++){
			var source = tags[i].innerHTML;
			var value = tags[i].getAttribute(attribute);
			tagList[value] = source;
		}
	}

	var listName = document.createElement('ul');
	console.log(tagList);
	for(var key in tagList){
		//console.log(key);
		if(key !== 'null') {
			console.log(key);
		var li = document.createElement('li');
		var text = key + ":" + tagList[key];
		li.innerHTML = text;

		listName.appendChild(li);
		}
		else {
			console.log('There exist empty links!!');
		}
	}


	document.body.appendChild(listName);
	console.log(listName);
}


addLoadEvent(accessKey);