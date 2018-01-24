

qiehuan();
//****************肤色切换************************************************
$('#skin_btn00').click(function(){
	localStorage.setItem('skin',0);
	qiehuan();
})
$('#skin_btn01').click(function(){
	localStorage.setItem('skin',1);
	qiehuan();
})				
$('#skin_btn02').click(function(){
	localStorage.setItem('skin',2);
	qiehuan();
})

function qiehuan(){
	var skin = localStorage.getItem('skin');
		//alert(fuse);
	if(skin==1){
//						alert('浅蓝');
		//**********头部*********
		$('#bj_top').css({'background':'#0b68b5','border-color':'#0b68b5'});
		$('#bj_top').find('h1').css({'color':'#fff'});
		//$('.bj_top_1').css({'background':'url("../img/qianlan_02.png") no-repeat top center','background-size': '.13rem .37rem'});
		//$('.bj_top_2').css({'background':'url("../img/qianlan_02.png") no-repeat top center','background-size': '.13rem .37rem'});
		$('.bj_top_3').css({'background':'url("../img/ql_03.png") no-repeat top center','background-size': ' 1.8rem .06rem'});						
			//**********左右两个矩形**************
		$('.bg_content_left').css({'border':'solid 2px #3497ea','color':'#3497ea'});
		$('.bg_content_right').css({'border':'solid 2px #3497ea','color':'#3497ea'});
		//*********小标题**************
		$('.bj_content_5').css({'background':'#d8d8d2',});
		$('.bg_content_center').css({'background':'#d8d8d2','color':'#0b68b5'});

		//***********body背景**********
		$('#body_baojing').css({'background':'#d8d8d2'});
		
		//*********内容区*********
		$('#bg_content_box').css({'background':'#095797'});
		//*************表格*********************
		$('.bg_butie').find('th').css({'background': 'linear-gradient(to bottom, #0c61a7 0%, #0b4f87 100%)','border-right': 'solid 1px #2c86d1','border-bottom': 'solid 1px #2c86d1'})
		$('.bg_butie').css({'border-left': 'solid 1px #2c86d1','border-top': 'solid 1px #2c86d1','color':'#fff'});
		$('.bg_butie').find('td').css({'border-right': 'solid 1px #2c86d1','border-bottom': 'solid 1px #2c86d1'});
	
		
		//********外边框******************
		$('#bj_content').css({'border':'solid 2px #3497ea'});
		//**********边缘*****************
		$('.bj_content_1').css({'background':'url("../img/qianlan_right.png") no-repeat top center','background-size': '0.035rem .6rem','right': '-0.056rem'});
		$('.bj_content_2').css({'background':'url("../img/qianlan_left.png") no-repeat top center','background-size': '0.035rem .6rem','left': '-0.058rem'});						
		$('.bj_content_3').css({'border-top':'solid 2px #3497ea'});
		$('.bj_content_4').css({'border-top':'solid 2px #3497ea'});


		//****四个角**********
		$('.bj_jiao_1').css({'border-left': 'solid 2px #3497ea','border-top': 'solid 2px #3497ea'});
		$('.bj_jiao_2').css({'border-right': 'solid 2px #3497ea','border-top': 'solid 2px #3497ea'});
		$('.bj_jiao_3').css({'border-left': 'solid 2px #3497ea','border-bottom': 'solid 2px #3497ea'});
		$('.bj_jiao_4').css({'border-right': 'solid 2px #3497ea','border-bottom': 'solid 2px #3497ea'});
//						tubiao();
	}else if(skin==2){
//			alert('灰色');
		//**********头部*********
		$('#bj_top').css({'background':'#ffefe0','border-color':'#ffefe0'});
		$('#bj_top').find('h1').css({'color':'#cb6100'});
		//$('.bj_top_1').css({'background':'url("../img/hs_02.png") no-repeat top center','background-size': '.13rem .37rem'});
		//$('.bj_top_2').css({'background':'url("../img/hs_02.png") no-repeat top center','background-size': '.13rem .37rem'});
		$('.bj_top_3').css({'background':'url("../img/hs_05.png") no-repeat top center','background-size': ' 1.8rem .0433rem'});						
		//***********body背景****
		$('#body_baojing').css({
			'background': '-moz-linear-gradient(top, #95a299 0%, #cdbda4 20%, #c3a58d 45%, #c7a778 75%, #97604b 100%)',
			'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #012f61), color-stop(20%, #cdbda4), color-stop(45%, #c3a58d), color-stop(75%, #c7a778), color-stop(100%, #97604b))',
			'background': '-webkit-linear-gradient(top, #95a299 0%, #cdbda4 20%, #c3a58d 45%, #c7a778 75%, #97604b 100%)',
			'background': '-o-linear-gradient(top, #95a299 0%, #cdbda4 20%, #c3a58d 45%, #c7a778 75%, #97604b 100%)',
			'background': '-ms-linear-gradient(top, #95a299 0%, #cdbda4 20%, #c3a58d 45%, #c7a778 75%, #97604b 100%)',
			'background': 'linear-gradient(to bottom, #95a299 0%, #cdbda4 20%, #c3a58d 45%, #c7a778 75%, #97604b 100%)'							
		});
		//*********内容区*********
		$('#bg_content_box').css({
//			'background': '-moz-linear-gradient(top, #bebdaf 0%, #daceb7 25%, #d3b397 50%, #d7b98b 65%, #a97e64 100%)',
//			'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #bebdaf), color-stop(25%, #daceb7), color-stop(50%, #d3b397), color-stop(65%, #d7b98b), color-stop(100%, #a97e64))',
//			'background': '-webkit-linear-gradient(top, #bebdaf 0%, #daceb7 25%, #d3b397 50%, #d7b98b 65%, #a97e64 100%)',
//			'background': '-o-linear-gradient(top, #bebdaf 0%, #daceb7 25%, #d3b397 50%, #d7b98b 65%, #a97e64 100%)',
//			'background': '-ms-linear-gradient(top, #bebdaf 0%, #daceb7 25%, #d3b397 50%, #d7b98b 65%, #a97e64 100%)',
//			'background': 'linear-gradient(to bottom, #aca99a 0%, #cec1ac 25%, #bf9f82 50%, #c1a172 65%, #a27357 100%)'							
			'background':'#ffefe0'
		});
		//*************表格*********************
		$('.bg_butie').find('th').css({'background': 'linear-gradient(to bottom, #f7f1ec 0%,#e7d6c5 100%)','border-right': 'solid 1px #788a02','border-bottom': 'solid 1px #788a02'})
		$('.bg_butie').css({'border-left': 'solid 1px #788a02','border-top': 'solid 1px #788a02','color':'#b82f00'});
		$('.bg_butie').find('td').css({'border-right': 'solid 1px #9d9f91','border-bottom': 'solid 1px #9d9f91'});
		
		
		//********外边框******************
		$('#bj_content').css({'border':'solid 2px #fff'});
		//**********边缘*****************
		$('.bj_content_1').css({'background':'url("../img/hs_right.png") no-repeat top center','background-size': '0.035rem .6rem','right': '-0.056rem'});
		$('.bj_content_2').css({'background':'url("../img/hs_left.png") no-repeat top center','background-size': '0.035rem .6rem','left': '-0.058rem'});						
		$('.bj_content_3').css({'border-top':'solid 2px #fff'});
		$('.bj_content_4').css({'border-top':'solid 2px #fff'});
		//*********小标题**************
		$('.bj_content_5').css({
			'background':'linear-gradient(to bottom, #bcb5a0 0%, #c8bba3 100%)'
			});
		$('.bg_content_center').css({
			'background':'linear-gradient(to bottom, #bcb5a0 0%, #c8bba3 100%)',
			'color':'#cb6100'
		});
			//**********左右两个矩形**************
		$('.bg_content_left').css({'border':'solid 2px #ffefe0','color':'#ffefe0'});
		$('.bg_content_right').css({'border':'solid 2px #ffefe0','color':'#ffefe0'});

		//****四个角**********
		$('.bj_jiao_1').css({'border-left': 'solid 2px #fff','border-top': 'solid 2px #fff'});
		$('.bj_jiao_2').css({'border-right': 'solid 2px #fff','border-top': 'solid 2px #fff'});
		$('.bj_jiao_3').css({'border-left': 'solid 2px #fff','border-bottom': 'solid 2px #fff'});
		$('.bj_jiao_4').css({'border-right': 'solid 2px #fff','border-bottom': 'solid 2px #fff'});				
		
//						tubiao();
	}else{
//						alert('深蓝');
		//**********头部*********
		$('#bj_top').css({'background':'#01274c','border-color':'#49d9fe'});
		$('#bj_top').find('h1').css({'color':'#49d8ff'});
		//***********body背景****
		$('#body_baojing').css({
			'background': '-moz-linear-gradient(top, #012f61 0%, #01040d 100%)',
			'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #012f61), color-stop(100%, #01040d))',
			'background': '-webkit-linear-gradient(top, #012f61 0%, #01040d 100%)',
			'background': '-o-linear-gradient(top, #012f61 0%, #01040d 100%)',
			'background': '-ms-linear-gradient(top, #012f61 0%, #01040d 100%)',
			'background': 'linear-gradient(to bottom, #012f61 0%, #01040d 100%)'				
		});	
		
		//***********小标题****
		$('.bg_content_center').css({'background':'#012a58','color':'#0b68b5','color':'#49d7fd'});
		$('.bj_content_5').css({'background':'#012a58'});
		//***********内容区 小body******
		$('#bg_content_box').css({
			'background': '-moz-linear-gradient(top, #022e5d 0%, #020f1f 100%)',
			'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #022e5d), color-stop(100%, #020f1f))',
			'background': '-webkit-linear-gradient(top, #022e5d 0%, #020f1f 100%)',
			'background': '-o-linear-gradient(top, #022e5d 0%, #020f1f 100%)',
			'background': '-ms-linear-gradient(top, #022e5d 0%, #020f1f 100%)',
			'background': 'linear-gradient(to bottom, #022e5d 0%, #020f1f 100%)'
		});
		//****************表格******************
		$('.bg_butie').css({'border-left': 'solid 1px #016098','border-top': 'solid 1px #016098','color':'#00acfe'});
		$('.bg_butie').find('th').css({'border-right': 'solid 1px #016098','border-bottom': 'solid 1px #016098',
				'background': '-moz-linear-gradient(top, #052d68 0%, #012353 100%)',
				'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #052d68), color-stop(100%, #012353))',
				'background': '-webkit-linear-gradient(top, #052d68 0%, #012353 100%)',
				'background': '-o-linear-gradient(top, #052d68 0%, #012353 100%)',
				'background': '-ms-linear-gradient(top, #052d68 0%, #012353 100%)',
				'background': 'linear-gradient(to bottom, #052d68 0%, #012353 100%)'		
	});
		$('.bg_butie').find('td').css({'border-right': 'solid 1px #016098','border-bottom': 'solid 1px #016098',});
		
		
		$('#bj_content').css({'border':'solid 2px #245da4'});
		$('.bj_content_3').css({'border-top':'solid 2px #255ea5'});
		$('.bj_content_4').css({'border-top':'solid 2px #255ea5'});
		$('.bg_content_left').css({'border':'solid 2px #175e8c','color':'#175e8c'});
		$('.bg_content_right').css({'border':'solid 2px #175e8c','color':'#175e8c'});						
		//$('.bj_top_1').css({'background':'url("../img/5_02.jpg") no-repeat top center','background-size': '.13rem .37rem'});
		//$('.bj_top_2').css({'background':'url("../img/5_02.jpg") no-repeat top center','background-size': '.13rem .37rem'});
		$('.bj_top_3').css({'background':'url("../img/5_05_03.jpg") no-repeat top center','background-size': ' 1.8rem .06rem'});
		$('.bj_content_1').css({'background':'url("../img/right.png") no-repeat top center','background-size': '0.08rem .7rem','right': '-0.065rem'});
		$('.bj_content_2').css({'background':'url("../img/left.png") no-repeat top center','background-size': '0.08rem .7rem','left': '-0.05rem'});
		//****四个角**********
		$('.bj_jiao_1').css({'border-left': 'solid 2px #3ec2e9','border-top': 'solid 2px #3ec2e9'});
		$('.bj_jiao_2').css({'border-right': 'solid 2px #3ec2e9','border-top': 'solid 2px #3ec2e9'});
		$('.bj_jiao_3').css({'border-left': 'solid 2px #3ec2e9','border-bottom': 'solid 2px #3ec2e9'});
		$('.bj_jiao_4').css({'border-right': 'solid 2px #3ec2e9','border-bottom': 'solid 2px #3ec2e9'});
		

//						tubiao();
	}
}				
	