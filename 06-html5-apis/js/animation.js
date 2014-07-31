var canvas  = document.getElementById("animated");
var ctx = canvas.getContext("2d");

var x =  0;
var y = 8;
var speed = 5;

function animate() {
    requestAnimationFrame(animate);
    x += speed;
    if (x <= 0 || x >= canvas.width){
        speed = -speed;
    }
    draw();
}
function draw() {
    ctx.clearRect(0, 0, 500, 100);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(x, y, 15, 30);
}

animate();