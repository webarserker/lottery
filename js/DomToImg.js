/*生成canvas图形*/

function DomToImg(){
	
	var span = '<div class="DomToImg">'+
					'<div id="btnSave"></div>'+
					'<div id="images" style="width:0; height:0"></div>'+
				'</div>'
	
	 return span
	
}

$('.body_baojing').append(DomToImg())

// 获取按钮id
var btnSave = document.getElementById("btnSave");
// 获取内容id
var content = document.getElementsByClassName("body_baojing");
// 进行canvas生成
btnSave.onclick = function(){
	html2canvas(content, {
        onrendered: function(canvas) {
        	//添加属性
        	canvas.setAttribute('id','thecanvas');
			//读取属性值
			// var value= canvas.getAttribute('id');
            document.getElementById('images').appendChild(canvas);
			
			
			var oCanvas = document.getElementById("thecanvas");

	/*自动保存为png*/
	// 获取图片资源
	var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
	saveFile(img_data1, 'abc');
			
        }
	});
}
// 保存文件函数
var saveFile = function(data, filename){
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;
   
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
};