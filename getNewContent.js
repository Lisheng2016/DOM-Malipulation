function getNewContent(){
	var request = getHTTPObject();
	if (request){
		request.open("Get","example.txt","true");
		request.onreadychange = function(){
			if(request.readyState == 4){
				alert("Response Received");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert('Sorry,your browser doesn\'t support XMLHttpRequest');
	}
	alert("Function done");
}
addLoadEvent(getNewContent);
