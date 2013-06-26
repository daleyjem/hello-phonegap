var clickAction;

document.addEventListener('deviceready', function(){
	clickAction = 'touchstart'; //Modernizr.touch ? 'touchstart' : 'click';
	alert(clickAction);
	$('#menuPopout')[0].bind(clickAction, function(){
		$('#actionBar').toggleClass('open');
	});
});