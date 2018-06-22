var canvasUpper;
var canvasLower;
var canvasContextUpper;
var canvasContextLower;
var canvasWidth;
var canvasHeight;

var lastTime;
var interval;

var background;
var anemone;
var fruit;

var bigFish;
var mousePositionX;
var mousePositionY;
var babyFish;

var scoreCalculation;

var whiteHalo;
var orangeHalo;

var dust;

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
    canvasWidth = canvasLower.width;
    canvasHeight = canvasLower.height;

    background = new Background();
    background.init();
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

    scoreCalculation = new ScoreCalculation();
    scoreCalculation.init();

    whiteHalo = new whiteHalo();
    orangeHalo = new orangeHalo();
    whiteHalo.init();
    orangeHalo.init();

    dust = new Dust();
    dust.init();
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    var nowTime = Date.now();
    interval = nowTime - lastTime;
    lastTime = nowTime;
    if (interval > 50) {
        interval = 50;
    }

    background.draw();
    anemone.draw();
    fruit.fruitMonitor();
    fruit.draw();

    canvasContextUpper.clearRect(0, 0, canvasWidth, canvasHeight);
    bigFish.draw();
    babyFish.draw();
    if (babyFish.alive) {
        bigFishFruitCollisionDetection();
        bigFishBabyFishCollisionDetection();
    }
    scoreCalculation.draw();

    whiteHalo.draw();
    orangeHalo.draw();

    dust.draw();
}

function onMouseMove(e) {
    if (babyFish.alive) {
        if (e.offsetX || e.layerX) {
            mousePositionX = e.offsetX === undefined ? e.layerX : e.offsetX;
            mousePositionY = e.offsetY === undefined ? e.layerY : e.offsetY;
        }
    }
}

