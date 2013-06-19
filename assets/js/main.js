$(document).ready(function(){
	$('#menuPopout').bind('touchstart', function(){
		$('#actionBar').toggleClass('open');
	});
});