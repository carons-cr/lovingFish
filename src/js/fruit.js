var Fruit = function() {
    this.fruitType = [];
    this.orangeFruit = new Image();
    this.blueFruit = new Image();
    this.alive = [];
    this.bornPositionX = [];
    this.bornPositionY = [];
    this.bornAnemoneId = [];
    this.width = [];
    this.speed = [];
};
Fruit.prototype.number = 50;
Fruit.prototype.init = function() {
    this.orangeFruit.src = "../img/fruit.png";
    this.blueFruit.src = "../img/blue.png";
    for(var i = 0; i < this.number; i++) {
        this.alive[i] = false;
        this.fruitType[i] = "";
        this.width[i] = 0;
        this.speed[i] = Math.random() * 0.017 + 0.003;
    }
};
Fruit.prototype.draw = function() {
    for (var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            var growWidth = this.speed[i] * interval;
            var growPositionY = this.speed[i] * interval * 5;
            if (this.width[i] <= 14) {
                var currentBornAnemoneId = this.bornAnemoneId[i];
                this.bornPositionX[i] = anemone.endPositionX[currentBornAnemoneId];
                this.bornPositionY[i] = anemone.endPositionY[currentBornAnemoneId];
                this.width[i] += growWidth;
            }else {
                this.bornPositionY[i] -= growPositionY;
            }
            var image = new Image();
            this.fruitType[i] === "orange" ? image = this.orangeFruit : image = this.blueFruit;
            canvasContextLower.drawImage(image, this.bornPositionX[i] - this.width[i]*.05, this.bornPositionY[i] - this.width[i]*0.5, this.width[i], this.width[i]);

            if (this.bornPositionY[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};
Fruit.prototype.fruitMonitor = function () {
    var aliveNumber = 0;
    for(var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            aliveNumber++;
        }
    }
    if (aliveNumber < 40) {
        this.sendFruit();
    }
};

Fruit.prototype.sendFruit = function () {
    for (var i = 0; i < this.number; i++) {
        if (!this.alive[i]) {
            this.born(i);
            return;
        }
    }
};

Fruit.prototype.born = function(i) {
    Math.random() < 0.3 ? this.fruitType[i] = "blue" : this.fruitType[i] = "orange";

    this.bornAnemoneId[i] = Math.floor(Math.random()*anemone.number);
    this.width[i] = 0;
    this.alive[i] = true;
};
Fruit.prototype.dead = function (i) {
    this.alive[i] = false;
};