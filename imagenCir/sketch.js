var img;
function preload() {
  createCanvas(300,300);
  img = loadImage("img/sd.jpg");
}

function setup() {
  image(img, 0, 0);
  var d = pixelDensity();
  var halfImage = 4 * (img.width * d) *
      (img.height/2 * d);
  img.loadPixels();
  for (var i = 0; i < halfImage; i++) {
    pixels[i] = pixels[i]+100;
  }
  updatePixels();
  alert(img.width);
}