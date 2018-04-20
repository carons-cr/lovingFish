var canvasUpper;
var canvasLower;
var canvasContextUpper;
var canvasContextLower;
var lastTime;
var interval;

document.body.onload = game;
function game() {
    init();
    gameloop();
}

function init() {
    canvasUpper = document.getElementById("canvas_upper");//fishes, dust, UI, circle
    canvasContextUpper = canvasUpper.getContext("2d");
    canvasLower = document.getElementById("canvas_lower");//background, anemone, fruits
    canvasContextLower = canvasLower.getContext("2d");
    lastTime = Date.now();
    interval = 0;
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var nowTime = Date.now();
    interval = nowTime - lastTime;
    lastTime = nowTime;
    console.log(interval);
}