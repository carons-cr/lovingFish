var BigFish = function () {
    this.axisOriginX = 0;
    this.axisOriginY = 0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.axisOriginAngle = 0;

};
BigFish.prototype.init = function () {
    this.axisOriginX = canvasWidth * 0.5;
    this.axisOriginY = canvasHeight * 0.5;
    this.bigEye.src = "../img/bigEye0.png";
    this.bigBody.src = "../img/bigSwim0.png";
    this.bigTail.src = "../img/bigTail0.png";
};
BigFish.prototype.draw = function () {
    this.axisOriginX = closeToAimPosition(mousePositionX, this.axisOriginX, 0.99);
    this.axisOriginY = closeToAimPosition(mousePositionY, this.axisOriginY, 0.99);
    var mouseAngle = Math.atan2(mousePositionY - this.axisOriginY, mousePositionX - this.axisOriginX) + Math.PI;
    this.axisOriginAngle = closeToAimAngle(mouseAngle, this.axisOriginAngle, 0.6);
    canvasContextUpper.save();
    canvasContextUpper.translate(this.axisOriginX, this.axisOriginY);
    canvasContextUpper.rotate(this.axisOriginAngle);
    canvasContextUpper.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);
    canvasContextUpper.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    canvasContextUpper.drawImage(this.bigTail, this.bigBody.width * 0.5 - 10, -this.bigTail.height * 0.5);


    canvasContextUpper.restore();
};