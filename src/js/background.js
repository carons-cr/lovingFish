var Background = function() {
    this.picture = new Image();
};
Background.prototype.init = function () {
    this.picture.src = "../img/background.jpg";
};
Background.prototype.draw = function () {
    canvasContextLower.drawImage(this.picture, 0, 0, canvasWidth, canvasHeight);
};