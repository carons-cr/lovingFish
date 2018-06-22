var Dust = function () {
    this.dust = [];
    this.picNumber = 0;
    this.picIndex = [];
    this.positionX = [];
    this.positionY = [];
    this.amplitude = [];
    this.angle = 0;
};
Dust.prototype.number = 30;
Dust.prototype.init = function () {
    this.picNumber = 7;
    for (var i = 0; i < this.picNumber; i++) {
        this.dust[i] = new Image();
        this.dust[i].src = "../img/dust" + i + ".png";
    }
    for (var j = 0; j < this.number; j++) {
        this.positionX[j] = Math.random()*canvasWidth;
        this.positionY[j] = Math.random()*canvasHeight;
        this.amplitude[j] = 20 + Math.random()*25;
        this.picIndex[j] = Math.floor(Math.random()*7);
    }
    this.angle = 0;
};
Dust.prototype.draw  = function () {
    this.angle += interval*0.0008;
    var sinAngle = Math.sin(this.angle);
    for (var i = 0; i < this.number; i++) {
        var currentPicIndex = this.picIndex[i];
        canvasContextLower.drawImage(this.dust[currentPicIndex], this.positionX[i] + this.amplitude[i]*sinAngle, this.positionY[i]);
    }
};