var canvasUpper;
var canvasLower;
var canvasContextUpper;
var canvasContextLower;

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
}

function gameloop() {
    requestAnimFrame(gameloop);
}