var Fruit = function() {
    this.alive = [];
    this.orangeFruit = new Image();
    this.blueFruit = new Image();
    this.bornPositionX = [];
    this.bornPositionY = [];
    this.bornAnemoneIdArr = [];
};
Fruit.prototype.number = 30;
Fruit.prototype.init = function() {
    this.orangeFruit.src = "../img/fruit.png";
    this.blueFruit.src = "../img/blue.png";

    for(var i = 0; i < this.number; i++) {
        this.alive[i] = true;
        this.bornPositionX[i] = 0;
        this.bornPositionY[i] = 0;
        this.bornPosition(i);
    }
};
Fruit.prototype.draw = function() {
    for (var i = 0; i < this.number; i++) {
        canvasContextLower.drawImage(this.orangeFruit, this.bornPositionX[i], this.bornPositionY[i]);
    }
};
Fruit.prototype.bornPosition = function(i) {
    var bornAnemoneId = this.getBornAnemoneIdNoRepeat();
    this.bornPositionX[i] = anemone.startPosition[bornAnemoneId] - this.orangeFruit.width/2.0;
    this.bornPositionY[i] = canvasHeight - anemone.height[bornAnemoneId] - this.orangeFruit.height/2.0;
};

Fruit.prototype.getBornAnemoneIdNoRepeat = function() {
    var bornAnemoneId = Math.floor(Math.random() * anemone.number);
    while (this.bornAnemoneIdArr.length !== 0 && this.bornAnemoneIdArr.indexOf(bornAnemoneId) !== -1) {
        bornAnemoneId = Math.floor(Math.random() * anemone.number);
    }
    this.bornAnemoneIdArr.push(bornAnemoneId);
    return bornAnemoneId;
};
// Fruit.prototype.update = function() {
//     var number = 0;
//     for (var i = 0; i < this.number; i++) {
//         if (this.alive[i]) {
//             number++;
//         }
//     }
// };