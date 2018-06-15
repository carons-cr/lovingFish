var Anemone = function () {
    this.startPositionX = [];
    this.startPositionY = 0;
    this.controlPositionX = [];
    this.controlPositionY = [];
    this.endPositionX = [];
    this.endPositionY = [];
    this.swingAngle = 0;
    this.swingAmplitude = [];
};
Anemone.prototype.number = 50;
Anemone.prototype.init = function () {
    this.startPositionY = canvasHeight;
    for (var i = 0; i < this.number; i++) {
        this.startPositionX[i] = i*20 + Math.random()*20;
        this.controlPositionX[i] = this.startPositionX[i];
        this.controlPositionY[i] = this.startPositionY - 100;
        this.endPositionX[i] = this.startPositionX[i];
        this.endPositionY[i] = this.startPositionY - 250 + Math.random()*50;
        this.swingAmplitude[i] = Math.random()*50 + 50;
    }
};
Anemone.prototype.draw = function () {
    this.swingAngle += interval*0.0008;
    var sinAngle = Math.sin(this.swingAngle);
    canvasContextLower.save();
    canvasContextLower.lineWidth = 20;
    canvasContextLower.lineCap = "round";
    canvasContextLower.strokeStyle = "purple";
    canvasContextLower.globalAlpha = 0.6;
    for (var i = 0; i < this.number; i++) {
        canvasContextLower.beginPath();
        canvasContextLower.moveTo(this.startPositionX[i], this.startPositionY);
        var swingPositionX = this.endPositionX[i] + sinAngle*this.swingAmplitude[i];
        canvasContextLower.quadraticCurveTo(this.controlPositionX[i], this.controlPositionY[i], swingPositionX, this.endPositionY[i]);
        canvasContextLower.stroke();
    }
    canvasContextLower.restore();
};
