var canvasUpper;
var canvasLower;
var canvasContextUpper;
var canvasContextLower;

var lastTime;
var interval;

var backgroundPicture;
var canvasWidth;
var canvasHeight;

var anemone;
var fruit;

document.body.onload = game;
function game() {
    init();
    lastTime = Date.now();
    interval = 0;
    gameloop();
}

function init() {
    canvasUpper = document.getElementById("canvas_upper");//fishes, dust, UI, circle
    canvasContextUpper = canvasUpper.getContext("2d");
    canvasLower = document.getElementById("canvas_lower");//background, anemone, fruits
    canvasContextLower = canvasLower.getContext("2d");

    backgroundPicture = new Image();
    backgroundPicture.src = "../img/background.jpg";
    canvasWidth = canvasLower.width;
    canvasHeight = canvasLower.height;

    anemone = new Anemone();
    anemone.init();

    fruit = new Fruit();
    fruit.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var nowTime = Date.now();
    interval = nowTime - lastTime;
    lastTime = nowTime;

    drawBackground();
    anemone.draw();
    fruit.draw();
}

