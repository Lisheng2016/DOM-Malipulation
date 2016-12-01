<style>
	.valignSuper {
		vertical-align: super;
	}

	.tdGreen {
		background-color:green;
		color:white;
	}
</style>
<script>
	var tdYes = document.getElementsByClassName('yes');
	for(var i=0;i<tdYes.length;i++){
		tdYes[i].className+="tdGreen";
	}
</script>

当需要在window.onload事件上绑定函数时，假设现在有以下两个函数：
function first(){
	console.log("This is first onload function");
}

function second(){
	console.log("This is secong onload function");

那么先绑定的函数不会被执行：
window.onload = first; //不会被执行
window.onload = second; //会执行最后一个函数

可以创建一个函数包含这两个函数：
function funcOnLoad(){
	function first(){
	console.log("This is first onload function");
	}

	function second(){
	console.log("This is secong onload function");
	}
}

window.onload = funcOnLoad;

在需要绑定的函数不多时，这样做应该比较简单
另外，通常给body加入onload事件，让网页加载完毕后执行某项功能，但必须等待网页加载完成，当网页包含较多图片或者视频等，加载未完成用户已经点击链接跳转，那么绑定在onload事件上的函数就不会被执行
而且特殊情况或者在现成的整站系统上，无法修改body参数，这时可以利用window.onload或者document.body.onload替换inline body onload event listener，而下面的addLoadEvent函数可以解决类似的问题。

addLoadEvent方法还能弹性的接受对window.onload事件的绑定

addLoadEvent函数的工作流程：
将现存的window.onload事件处理函数的值交给变量oldload
判断原window.onload是否已经绑定函数
如果没有：
那么将此函数绑定到window.onload事件
如果已经绑定函数：
那么将参数中的函数追加给原处理函数

function addLoadEvent(func){
	var window.onload = oldonload;
	if((typeof window.onload) != "function"){
		window.onload = func;
	}
	else {
		window.onload = functin(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(first);  //追加first()
addLoadEvetn(second);  //追加second()

addLoadEvent处理追加对window.onload事件绑定的函数是比较方便的。

那么问题又来了：window.onload = func;和<body onload="func()">的区别是什么？有什么影响？
<table>
	<thead>
		<tr>
			<td>方面/方式</td>
			<td>window.onload = func;</td>
			<td><body onload="func()"></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>fireOnWindowReady</td>
			<td class="yes">Yes</td>
			<td class="yes">Yes</td>
		</tr>
		<tr>
			<td>存在位置</td>
			<td>外部JS文件</td>
			<td>HTML文件</td>
		</tr>
		<tr>
			<td>支持&times;javascript</td>
			<td class="yes"></td>
			<td class="no"></td>
		</tr>
		<tr>
			<td>触发条件</td>
			<td>所有文件下载完毕<span class="valignSuper">*</span></td>
			<td>所有文件下载完毕<span class="valignSuper">*</span></td>
		</tr>
	</tbody>
</table>

使用window.onload事件的最大问题还是要等待所有资源下载完毕，这显然不符合提升用户体验的原则，也会带来问题。
因此，我更应该使用监听DOM是否加载完成的方法来选择执行javascript的时机：
类似jQuery就提供：$(document).ready();方法实现监听DOM加载完毕

