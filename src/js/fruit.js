var Fruit = function() {
    this.alive = [];
    this.orangeFruit = new Image();
    this.blueFruit = new Image();
    this.bornPositionX = [];
    this.bornPositionY = [];
    this.bornAnemoneIdArr = [];
    this.width = [];
    this.speed = [];
};
Fruit.prototype.number = 30;
Fruit.prototype.init = function() {
    this.orangeFruit.src = "../img/fruit.png";
    this.blueFruit.src = "../img/blue.png";

    for(var i = 0; i < this.number; i++) {
        this.alive[i] = true;
        this.born(i);
    }

};
Fruit.prototype.draw = function() {
    for (var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            if (this.width[i] <= 18) {
                this.width[i] += this.speed[i] * interval;
            } else {
                this.bornPositionY[i] -= this.speed[i] * 5 * interval;
            }
            canvasContextLower.drawImage(this.orangeFruit, this.bornPositionX[i] - this.width[i] * 0.5,
                this.bornPositionY[i] - this.width[i] * 0.5, this.width[i], this.width[i]);
            if (this.bornPositionY[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
};
Fruit.prototype.born = function(i) {
    var bornAnemoneId = this.getBornAnemoneIdNoRepeat();
    this.bornPositionX[i] = anemone.startPosition[bornAnemoneId];
    this.bornPositionY[i] = canvasHeight - anemone.height[bornAnemoneId];

    this.width[i] = 0;
    this.speed[i] = Math.random() * 0.01 + 0.005;
};
Fruit.prototype.getBornAnemoneIdNoRepeat = function() {
    var bornAnemoneId = Math.floor(Math.random() * anemone.number);
    while (this.bornAnemoneIdArr.length !== 0 && this.bornAnemoneIdArr.indexOf(bornAnemoneId) !== -1) {
        bornAnemoneId = Math.floor(Math.random() * anemone.number);
    }
    this.bornAnemoneIdArr.push(bornAnemoneId);
    return bornAnemoneId;
};
