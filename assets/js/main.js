// Plugin includes
var scanner = cordova.require('cordova/plugin/BarcodeScanner');

var clickAction;

$(document).ready(function(){
	clickAction = Modernizr.touch ? 'touchstart' : 'click';
	$('#menuPopout').bind(clickAction, function(){
		$('#actionBar').toggleClass('open');
	});
	
	$('#btn-scan').click(function(){
		scanner.scan(function(result){
			alert('scan success: ' + result.format);
		}, function(){
			alert('scan fail');
		});
	});
});