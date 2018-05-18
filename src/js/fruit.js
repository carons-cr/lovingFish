var Fruit = function() {
    this.alive = [];
    this.fruitType = [];
    this.orangeFruit = new Image();
    this.blueFruit = new Image();
    this.bornPositionX = [];
    this.bornPositionY = [];
    //this.bornAnemoneIdArr = [];
    this.width = [];
    this.speed = [];
};
Fruit.prototype.number = 30;
Fruit.prototype.init = function() {
    this.orangeFruit.src = "../img/fruit.png";
    this.blueFruit.src = "../img/blue.png";
    for(var i = 0; i < this.number; i++) {
        this.alive[i] = false;
        this.fruitType[i] = "";
        this.speed[i] = Math.random() * 0.017 + 0.003;
    }
};
Fruit.prototype.draw = function() {
    for (var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            var growWidth = this.speed[i] * interval;
            var growBornPositionY = this.speed[i] * interval * 5;
            this.width[i] <= 18 ? this.width[i] += growWidth : this.bornPositionY[i] -= growBornPositionY;
            var image = new Image();
            this.fruitType[i] === "orange" ? image = this.orangeFruit : image = this.blueFruit;
            var imageX = this.bornPositionX[i] - this.width[i] * 0.5;
            var imageY = this.bornPositionY[i] - this.width[i] * 0.5;
            canvasContextLower.drawImage(image, imageX, imageY, this.width[i], this.width[i]);
            if (this.bornPositionY[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};
Fruit.prototype.born = function(i) {
    Math.random() < 0.2 ? this.fruitType[i] = "blue" : this.fruitType[i] = "orange";
    var bornAnemoneId = Math.floor(Math.random() * this.number);
    this.bornPositionX[i] = anemone.startPosition[bornAnemoneId];
    this.bornPositionY[i] = canvasHeight - anemone.height[bornAnemoneId];
    this.width[i] = 0;
    this.alive[i] = true;
};
function fruitMonitor() {
    var aliveNumber = 0;
    for(var i = 0; i < fruit.number; i++) {
        if (fruit.alive[i]) {
            aliveNumber++;
        }
    }
    if (aliveNumber < 20) {
        sendFruit();
    }
}
function sendFruit() {
    for (var i = 0; i < fruit.number; i++) {
        if (!fruit.alive[i]) {
            fruit.born(i);
            return;
        }
    }
}