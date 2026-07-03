//$(function() {
//	var winH = $(window).height();
//	$('#slider li').css('height',winH);
//});
//
//$(function() {
//	setSize();
//	//リサイズしたら実行
//	$(window).resize(function(){
//	   setSize();
//	});
//});
////
////function setSize() {
////	//画像サイズ指定
////	var imgW = 1632;
////	var imgH = 1224;
////	//ウィンドウサイズ取得
////	var winW = $(window).width();
////	var winH = $(window).height();
////	var scaleW = winW / imgW;
////	var scaleH = winH / imgH;
////	var fixScale = Math.max(scaleW, scaleH);
////	var setW = imgW * fixScale;
////	var setH = imgH * fixScale;
////	var moveX = Math.floor((winW - setW) / 2);
////	var moveY = Math.floor((winH - setH) / 2);
////
////	$('#bg').css({
////		'width': setW,
////		'height': setH,
////		'left' : moveX,
////		'top' : moveY
////	});
////}
//
//
//function setSize() {
//
//	var winH = $(window).height();
//	var winW = $(window).width();
//	$('#slider li').css('height',winH);
//	//ウィンドウサイズ取得	
//	//var scaleW = winW / imgW;
////	var fixScale = scaleW;
////	var setW = imgW * fixScale;
////	var moveX = Math.floor((winW - setW) / 2);
//
//	$('#slider li,.bx-window').css({
//		'height' : winH,
//		'width': winW
//	});
//	$('.bg_img,.bx-wrapper,.bx-window').css({
//		'width': winW
//	});
//}



