var Anemone = function () {
    this.startPosition = [];
    this.height = [];
};
Anemone.prototype.number = 50;
Anemone.prototype.init = function () {
    for (var i = 0; i < this.number; i++) {
        this.startPosition[i] = i * 20 + Math.random() * 20;
        this.height[i] = 200 + Math.random() * 50;
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
        canvasContextLower.moveTo(this.startPosition[i], canvasHeight);
        canvasContextLower.lineTo(this.startPosition[i], canvasHeight - this.height[i]);
        canvasContextLower.stroke();
    }
    canvasContextLower.restore();
};
