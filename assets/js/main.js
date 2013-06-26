var clickAction;

$(document).ready(function(){
	clickAction = Modernizr.touch ? 'touchstart' : 'click';
	$('#menuPopout').bind(clickAction, function(){
		$('#actionBar').toggleClass('open');
	});
});