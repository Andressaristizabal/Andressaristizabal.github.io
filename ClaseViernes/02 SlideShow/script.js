var pos = 4;
jQuery(document).ready(function($) {
	$('.crop-img').click(function(event) {
		var image = $(this).attr('src');
		$('#bigImage').attr('src', image+"").fadeIn(0).delay(600);
	});

	$('#backward').click(function(event) {
		if (pos < 1) {
			pos = 4;
			$("#image"+pos).click();
		}else{
			$("#image"+pos).click();
			pos--;
		}
	});
	$('#forward').click(function(event) {
		if (pos > 4) {
			pos = 1;
			$("#image"+pos).click();
		}else{
			$("#image"+pos).click();
			pos++;
		}
	});
	pasar();
	setInterval(function () {
		 $('#bigImage').fadeOut(800,pasar());
	}, 1500);
	

});
function pasar () {
	if (pos > 4) {
			pos = 1;
			$("#image"+pos).click();
		}else{
			$("#image"+pos).click();
			pos++;
		} 

}