var orangeHalo = function () {
    this.axisOriginX = [];
    this.axisOriginY = [];
    this.alive = [];
    this.radius = [];
    this.transparencyAlpha = 0;
};

orangeHalo.prototype.number = 5;

orangeHalo.prototype.init = function () {
    for (var i = 0; i < this.number; i++) {
        this.alive[i] = false;
        this.radius[i] = 0;
    }
};

orangeHalo.prototype.draw = function () {
    canvasContextUpper.save();
    canvasContextUpper.lineWidth = 2;
    canvasContextUpper.shadowBlur = 10;
    canvasContextUpper.shadowColor = "white";
    for (var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            this.radius[i] >= 100 ? this.alive[i] = false : this.radius[i] += interval*0.1;
            var transparencyAlpha = 1 - this.radius[i]/100;
            canvasContextUpper.beginPath();
            canvasContextUpper.arc(this.axisOriginX[i], this.axisOriginY[i], this.radius[i], 0, Math.PI*2);
            canvasContextUpper.closePath();
            canvasContextUpper.strokeStyle = "rgba(203, 91, 0, " + transparencyAlpha + ")";
            canvasContextUpper.stroke();
        }
    }
    canvasContextUpper.restore();
};

orangeHalo.prototype.born = function (axisOriginX, axisOriginY) {
    for (var i = 0; i < this.number; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.radius[i] = 20;
            this.axisOriginX[i] = axisOriginX;
            this.axisOriginY[i] = axisOriginY;
            return;
        }
    }
};

