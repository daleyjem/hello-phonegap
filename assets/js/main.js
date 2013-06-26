var clickAction;

document.addEventListener('deviceready', function(){
	clickAction = Modernizr.touch ? 'touchstart' : 'click';
	$('#menuPopout')[0].addEventlistener(clickAction, function(){
		$('#actionBar').toggleClass('open');
	});
});