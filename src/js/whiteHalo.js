var whiteHalo = function () {
    this.axisOriginX = [];
    this.axisOriginY = [];
    this.alive = [];
    this.radius = [];
    this.transparencyAlpha = 0;
};

whiteHalo.prototype.number = 10;

whiteHalo.prototype.init = function () {
    for (var i = 0; i < this.number; i++) {
        this.alive[i] = false;
        this.radius[i] = 0;
    }
};

whiteHalo.prototype.draw = function () {
    canvasContextUpper.save();
    canvasContextUpper.lineWidth = 2;
    canvasContextUpper.shadowBlur = 10;
    canvasContextUpper.shadowColor = "white";
    for (var i = 0; i < this.number; i++) {
        if (this.alive[i]) {
            this.radius[i] >= 55 ? this.alive[i] = false : this.radius[i] += interval*0.05;
            var transparencyAlpha = 1 - this.radius[i]/55;
            canvasContextUpper.beginPath();
            canvasContextUpper.arc(this.axisOriginX[i], this.axisOriginY[i], this.radius[i], 0, Math.PI*2);
            canvasContextUpper.closePath();
            canvasContextUpper.strokeStyle = "rgba(255, 255, 255, " + transparencyAlpha + ")";
            canvasContextUpper.stroke();
        }
    }
    canvasContextUpper.restore();
};

whiteHalo.prototype.born = function (axisOriginX, axisOriginY) {
    for (var i = 0; i < this.number; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.radius[i] = 10;
            this.axisOriginX[i] = axisOriginX;
            this.axisOriginY[i] = axisOriginY;
            return;
        }
    }
};

