//files for hover table tdata section

var table = document.getElementById('test-table');
	console.log(table);

	var rows = table.getElementsByTagName('tr');
	console.log(rows);

function stripesTable (){
	var stripe = false;
	

	for(var i=0;i<rows.length;i++){
		if(!stripe){
			rows[i].style.color = "white";
			rows[i].style.backgroundColor = "grey";
			stripe = true;
			
		}
		else {
			stripe = false;
		}
	}
}


function hoverColor(){
	//console.log(rows[3]);
	for(var i=1;i<rows.length;i++){
		//console.log(rows[j]);
		rows[i].onmouseover = function(){
			// this.oldColor = this.style.color;
			// this.oldBgColor = this.style.backgroundColor;
			this.className = 'greyWhite';
			// this.style.color = "green";
			// this.style.backgroundColor = "red";
		}
		rows[i].onmouseout = function(){
			this.className = null;
			// this.style.color = this.oldColor;
			// this.style.backgroundColor = this.oldBgColor;
		}
	}
}


addLoadEvent(hoverColor);