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

var bigFish;
var mousePositionX;
var mousePositionY;

var babyFish;

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

    bigFish = new BigFish();
    bigFish.init();
    mousePositionX = canvasWidth * 0.5;
    mousePositionY = canvasHeight * 0.5;
    canvasUpper.addEventListener("mousemove", onMouseMove, false);

    babyFish = new BabyFish();
    babyFish.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var nowTime = Date.now();
    interval = nowTime - lastTime;
    lastTime = nowTime;
    if (interval > 50) {
        interval = 50;
    }

    drawBackground();
    anemone.draw();
    fruitMonitor();
    fruit.draw();

    canvasContextUpper.clearRect(0, 0, canvasWidth, canvasHeight);

    bigFish.draw();
    bigFishFruitCollisionDetection();

    babyFish.draw();

}

function onMouseMove(e) {
    if (e.offsetX || e.layerX) {
        mousePositionX = e.offsetX === undefined ? e.layerX : e.offsetX;
        mousePositionY = e.offsetY === undefined ? e.layerY : e.offsetY;
    }

}

