var canvas;
var x;
var y;
var r = 100;
function setup() {
       canvas = createCanvas(windowWidth,window.innerHeight);
       
       
	
}

function draw() {
        
    ellipse(mouseX,mouseY,r,r);
    fill(255);
 	
}

function calcular()  {
	  x  = parseInt($('#x').val());
	  y  = parseInt($('#y').val());
          r = x*y;

	 $('#resu').text(r);
}






