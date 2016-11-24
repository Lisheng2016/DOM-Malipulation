// file for displaying cite info in cited blockquote!!
function collectCites (){
var citeUrl = [];
var cites = document.getElementsByTagName('blockquote');

//遍历所有的blockquote元素

if (cites.length >= 1 ){
	for(var i = 0; i<cites.length;i++){
		haveUrl = cites[i].getAttribute('cite');
		if(haveUrl !== null){
			citeUrl[i] = haveUrl;
		}
		else {
			
		}
	}

//存在需要变更的块引用则取出 URL

var citeDiv = document.createElement('div');

//创建用于放置URL的div分区

	for(var i in citeUrl){
		var aSource = document.createElement('a');
		aSource.setAttribute('href',citeUrl[i]);
		aSource.innerHTML = 'Source';
		
		citeDiv.appendChild(aSource);
	}

//完成创建a标签并追加给文档碎片 citediv 等待最后追加给document.body

document.body.appendChild(citeDiv);	

//追加Source列表

}
else {
	console.log('There is no tag \'blockquote\' in your HTML file');
}
}

addLoadEvent(collectCites);