var x = 0;
var y = 0;
var colors =[];
var bubble  =[];
var conL= 4;
var conK= 0;
function setup() {
	createCanvas(windowWidth,window.innerHeight);
	bubble[0]= new Bubble();
	bubble[1]= new Bubble();
	bubble[2]= new Bubble();
	bubble[3]= new Bubble();
	bubble[4]= new Bubble();
	bubble[5]= new Bubble();
	bubble[6]= new Bubble();
	bubble[7]= new Bubble();

	 //configurando tamaño en el camvas
	/*colors[1] = color( 46, 66,114);
	colors[2] = color(120,135,171);
	colors[3] = color( 79, 98,142);
	colors[4] = color( 22, 41, 85);
	colors[5] = color(  6, 21, 57);
	colors[6] = color( 46, 66,114);
	colors[7] = color( 79, 98,142);
	colors[8] = color( 22, 41, 85);
	colors[9] = color(  6, 21, 57);
	colors[10] = color( 46, 66,114);*/
	
}

function draw() {
	background(255);
	conL=0
	bubble.forEach( function(element, index) {
		if (bubble[index].life==1) {
			bubble[index].move();
		bubble[index].display();
		conL++;
		}

		if (bubble[index].x <= 0 || bubble[index].x+bubble[index].r >= width ) {
			bubble[index].SpeedX =  bubble[index].SpeedX * (-1);
			bubble[index].SpeedY =  bubble[index].SpeedY * (-1);
			if (conL < 100) {
				bubble.push(new Bubble);
			}
		}

		if (bubble[index].y <= 0 || bubble[index].y+bubble[index].r >= height ) {
			bubble[index].SpeedX =  bubble[index].SpeedX * (-1);
			bubble[index].SpeedY =  bubble[index].SpeedY * (-1);
			if (conL < 100) {
				bubble.push(new Bubble);
			}
		}


		bubble.forEach( function(element2, index2) {
			if (index != index2) {
				bubble[index].colicion(element2.x,element2.y,element2.r);
			}
		});
		
	});
	document.getElementById("life").innerHTML=(""+conL);

	document.getElementById("kill").innerHTML=(""+conK);
	if (conL==0) {
		textSize(80);
		text(" Winner",width/2,height/2);
		fill(0,255,0);
	}
	/*fill(255,3);
	rect(0,0,width,height);
	
	
	
	//background(255);
 	if (mouseIsPressed) {
 		fill(0); ///rellenar figuras
 		
 	}else {fill(colors[parseInt(random(8))])};
 	//width --> tamaño del ancho
 	var nAlt = (Math.random() * 100) + 2;
 	ellipse(mouseX,mouseY,nAlt,nAlt); /// eclipse (posx,posy,an,al)
 	/*ellipse(width-mouseX,mouseY,80,80);
 	ellipse(width-mouseX,height-mouseY,80,80);
 	ellipse(mouseX,height-mouseY,80,80);*/
 	
}

function mousePressed () {
	 bubble.forEach( function(element, index) {
	 	var d = dist(mouseX,mouseY,element.x,element.y);
	 	if(d<element.r){
	 		element.life = 0;
	 		conK++;
	 	}
	 	
	 });  
}
	
//// Clases de objecto

function Bubble () {
	this.life = 1;
	this.x = random(0,width);  
	this.y = random(0,height); //atributos
	this.SpeedX = random(0,2); //atributos
	this.SpeedY = random(0,2); //atributos
	this.r = random(10,20);
	this.display = function () {
		
			
		 ellipse(this.x,this.y,this.r*2,this.r*2);
		 fill(124);
	}
	this.move = function () {
		this.x+=this.SpeedX;
		this.y+=this.SpeedY;
	}
	
	this.colicion = function (x,y,r) {
		var d = dist(this.x,this.y,x,y);
		if (d <= this.r+r) {
			this.SpeedX=this.SpeedX*(-1);

		}
	}



}

function killTOTAl () {
	bubble.forEach( function(element, index) {
	 	
	 	
	 		element.life = 0;
	 		conK++;
	 	
	 });   
}

