var Anemone = function () {
    this.positionX = [];
    this.startPositionY = 0;
    this.height = [];
    this.endPositionY = [];
};
Anemone.prototype.number = 50;
Anemone.prototype.init = function () {
    this.startPositionY = canvasHeight;
    for (var i = 0; i < this.number; i++) {
        this.positionX[i] = i * 20 + Math.random() * 20;
        this.height[i] = 200 + Math.random() * 50;
        this.endPositionY[i] = this.startPositionY - this.height[i];
    }
};
Anemone.prototype.draw = function () {
    canvasContextLower.save();
    canvasContextLower.lineWidth = 20;
    canvasContextLower.lineCap = "round";
    canvasContextLower.strokeStyle = "purple";
    canvasContextLower.globalAlpha = 0.6;
    for (var i = 0; i < this.number; i++) {
        canvasContextLower.beginPath();
        canvasContextLower.moveTo(this.positionX[i], this.startPositionY);
        canvasContextLower.lineTo(this.positionX[i], this.endPositionY[i]);
        canvasContextLower.stroke();
    }
    canvasContextLower.restore();
};
