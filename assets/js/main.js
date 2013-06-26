var clickAction;

document.addEventListener('deviceready', function(){
	clickAction = 'touchstart'; //Modernizr.touch ? 'touchstart' : 'click';
	alert(clickAction);
	$('#menuPopout').bind(clickAction, function(){
		$('#actionBar').toggleClass('open');
	});
});