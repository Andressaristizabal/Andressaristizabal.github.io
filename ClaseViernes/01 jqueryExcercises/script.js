var size;

$(function(){

  $('#button').click(function(){
    var x = $('#var1').val();
    var y = $('#var2').val();

    console.log(x);
    console.log(y);
    var resultado = x*y;
    size = resultado;
    console.log(resultado);

    $('#resultado').html(String(resultado));

  });

});

var bubbles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY,size));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();

     if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }

  if (bubbles.length>50){

    bubbles.splice(0,1);

  }
}

function Bubble(x, y,s) {
  this.x = x;
  this.y = y;
  this.size = s;

  this.speedX=random(-2,2);
  this.speedY=random(-2,2);

  this.lifespan = 255;

  this.display = function() {
    stroke(255);
    fill(255, 0, 150, 50);
    fill(255, 0, 150, this.lifespan);
    ellipse(this.x, this.y, this.size , this.size );
  }

  this.update = function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    this.lifespan = this.lifespan - 1;

  }

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}
