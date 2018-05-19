var BabyFish = function () {
    this.axisOriginX = 0;
    this.axisOriginY = 0;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
    this.axisOriginAngle = 0;
};
BabyFish.prototype.init = function () {
    this.axisOriginX = canvasWidth * 0.5 + 50;
    this.axisOriginY = canvasHeight * 0.5 + 50;
    this.babyEye.src = "../img/babyEye0.png";
    this.babyBody.src = "../img/babyFade0.png";
    this.babyTail.src = "../img/babyTail0.png";
};
BabyFish.prototype.draw = function () {
    this.axisOriginX = closeToAimPosition(bigFish.axisOriginX + 50, this.axisOriginX, 0.08);
    this.axisOriginY = closeToAimPosition(bigFish.axisOriginY + 50, this.axisOriginY, 0.08);

    var bigFishAngle = Math.atan2(this.axisOriginY - bigFish.axisOriginY - 50, this.axisOriginX - bigFish.axisOriginX - 50);
    this.axisOriginAngle = closeToAimAngle(bigFishAngle, this.axisOriginAngle, 0.9);

    canvasContextUpper.save();
    canvasContextUpper.translate(this.axisOriginX, this.axisOriginY);
    canvasContextUpper.rotate(this.axisOriginAngle);
    canvasContextUpper.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 24, -this.babyTail.height * 0.5);
    canvasContextUpper.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    canvasContextUpper.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);
    canvasContextUpper.restore();
};