
var boxes = document.getElementsByClassName('box');
var box = boxes[0];
box.style.boxShadow="0px 0px 60px 5px rgba(100, 100, 100, 9)";

document.onmousemove = function (event) {

  var x = translateX(event.pageX);
  var y = translateY(event.pageY);
  var spread = Math.pow(distance(x, y), 1.01) + 10;
  var alpha = Math.pow(1.001, -spread);

  var newBoxShadow = getBoxShadow(x, y, spread, alpha);
  box.style.boxShadow = newBoxShadow;
};

function distance (x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

function translateX (posX) {
  return -(posX - document.body.offsetWidth/2);
}

function translateY (posY) {
  return -(posY - document.body.offsetHeight/2);
}

function getBoxShadow (x, y, spread, alpha) {
  return x + "px " + y + "px " + spread + "px 5px rgba(100, 100, 100, " + alpha + ")";
}
