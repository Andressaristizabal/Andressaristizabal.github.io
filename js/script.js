var herramientas = [
	{nombre:'Java',tipo:'Lenguaje de Programacion',Nivel:'Intermedio',url:'https://www.java.com/es/'},
	{nombre:'Python',tipo:'Lenguaje de Programacion',Nivel:'Básico',url:'https://www.python.org/'},
	{nombre:'PHP',tipo:'Lenguaje de Programacion',Nivel:'Alto',url:'http://www.php.net/'},
	{nombre:'JavaScript',tipo:'Lenguaje de Programacion',Nivel:'Alto',url:'https://www.javascript.com/'},
	{nombre:'C#',tipo:'Lenguaje de Programacion',Nivel:'Intermedio',url:'https://msdn.microsoft.com/en-us/library/kx37x362.aspx'},
	{nombre:'Android',tipo:'Lenguaje de Programacion para Smartphone',Nivel:'Intermedio',url:'https://www.android.com/'},
	{nombre:'HTML5',tipo:'Lenguaje de Marcado',Nivel:'Alto',url:'http://www.w3schools.com/html/html5_intro.asp'},
	{nombre:'CSS3',tipo:'Lenguaje de styleSheets',Nivel:'Alto',url:'http://www.w3schools.com/css/css3_intro.asp'},
	{nombre:'SQL',tipo:'Lenguaje de consultas a Bases de datos',Nivel:'Intermedio',url:'http://www.w3schools.com/sql/'},
	{nombre:'Jquery',tipo:'Framework de Lenguaje de Programacion',Lenguaje:'JavaScript',Nivel:'Alto',url:'https://jquery.com/'},
	{nombre:'Ionic',tipo:'Framework de Lenguaje de Programacion de Smartphone',Nivel:'Basico',url:'http://ionicframework.com/'},
	{nombre:'Bootstrap',tipo:'Framework  de Lenguaje Programacion',Lenguaje:'CSS', Nivel:'Alto',url:'http://getbootstrap.com/'},
	{nombre:'Angular',tipo:'Framework de Lenguaje de Programacion',Lenguaje:'JavaScript', Nivel:'Intermedio',url:'https://angularjs.org/'},
	{nombre:'Flask',tipo:'Framework de Lenguaje de Programacion',Lenguaje:'Python', Nivel:'Intermedio',url:'http://flask.pocoo.org/'},
	{nombre:'Arduino',tipo:'Framework de Lenguaje de Programacion',Lenguaje:'C++ (Microcontroladores)', Nivel:'Intermedio',url:'https://www.arduino.cc/'},
	{nombre:'Raspberry Pi',tipo:'Framework de Lenguaje de Programacion',Lenguaje:'Python (Microprocesadores)', Nivel:'Intermedio',url:'https://www.raspberrypi.org/'},

];

jQuery(document).ready(function($) {
	herramientas.forEach( function(element, index) {
		$('#herramientas').append(herramienta(element));
	});
});

function herramienta (element) {
	var frame = '';
	if (element.Lenguaje != null) {frame="Lenguaje : " + element.Lenguaje; }
	var str = '<div class="col-md-4" style="margin-Top:75px;">'+
					'<div class="fh5co-person text-center to-animate">'+
						'<figure><img src="images/person1.jpg" alt="Image"></figure>'+
						'<h3>'+element.nombre+'</h3>'+
						'<span class="fh5co-position">'+element.tipo+'</span>'+
						'<p>Nivel: '+element.Nivel+' '+frame+'</p>'+
						'<ul class="social social-circle">'+
							'<li><a href="'+element.url+'" target="_blank"><i class="icon-dribbble"></i></a></li>'+
						'</ul>'+
					'</div>'+
				'</div>';
	return str;
}