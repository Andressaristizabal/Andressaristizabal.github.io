$(document).ready(function(){
//$('p').css('border','4px solid red');
//$('.lead').css('border','4px solid green');
//$('#lesson-1').css('border','4px solid yellow');

//animaciones
//$('.box:first').hide(500) // identificador : first --> coje el primero
//$('.box:first').hide(500).delay(500).show(800); // se puede concatenar animaicones
//$('.box').slideUp(500).slideDown(800); // animacion de despliegue
//$('.box:first').animate({height:'200'},600); // {prop_css : value},duracion
//$('.box:first').animate({bottom:'200',left:'200'},600); // {prop_css : value},duracion

//Filtros
//$('p:first').css('border','4px solid red'); // primero
//$('p:last').css('border','4px solid red');  ultimo
//$('p:lt(2)').css('border','4px solid red');  lt(despues de #)
//$('p:eq(1)').css('border','4px solid red');  eq(igual a #)
//$('p:has(span)').css('border','4px solid red');  eq(que contengan a etiqu)
//$('.boxes:parent').css('border','4px solid red');  eq(que contengan a etiqu)

//Atributo
//$('p[name=shorty]').css('border','4px solid red'); name
//$('p[name^=sho]').css('border','4px solid red'); name parecido







});


$(function(){

//$('p:first').attr('class','not-lead'); //attr(atributo,<opc cambiar class >)
/*$('img:last').slideUp(600,function () {
	$('img:last').attr('src', 'img2.jpg'); 
}).delay(400).slideDown(650);*/
//

//Class Methds
//alert($('p:last').hasClass('lead')); para saber si tiene la clase
//$('p:first()').removeClass('lead').addClass(''+$('p:first'));
//$('p:first').toggleClass('blue'); cambiar clas
//$('p:first').html("<h2>s</h2>");
//$('input').val("Hol");

});



$(function(){

//Recorridos entre los selectores 
//$('h2').children().css('border', '4px solid red');
//$('h2').parents('section').children().css('border', '4px solid red');	

//event bind
/*
$('h2').bind('click',  function(event) {
	$(this).toggleClass('blue');
});*/
//event sin bind
/*$('h2').click(function(event) {
	$(this).toggleClass('blue');
});*/
/*
$('h2').hover(function() {
	$(this).toggleClass('blue');
});*/

$('html').keypress(function(event) {
	$(this).toggleClass('blue');
});

});
