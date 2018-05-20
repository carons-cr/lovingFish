var BabyFish = function () {
    this.axisOriginX = 0;
    this.axisOriginY = 0;
    this.axisOriginAngle = 0;
    this.babyTail = [];
    this.babyTailNumber = 0;
    this.babyTailDuration = 0;
    this.babyTailTimer = 0;
    this.babyTailIndex = 0;
    this.babyBody = [];
    this.babyBodyNumber = 0;
    this.babyBodyDuration = 0;
    this.babyBodyTimer = 0;
    this.babyBodyIndex = 0;
    this.babyEye = [];
    this.babyEyeNumber = 0;
    this.babyEyeDuration = 0;
    this.babyEyeTimer = 0;
    this.babyEyeIndex = 0;

};
BabyFish.prototype.init = function () {
    this.axisOriginX = canvasWidth * 0.5 + 50;
    this.axisOriginY = canvasHeight * 0.5 + 50;
    this.babyTailDuration = 50;
    this.babyTailNumber = 8;
    for (var i = 0; i < this.babyTailNumber; i++) {
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "../img/babyTail" + i + ".png";
    }
    this.babyBodyDuration = 450;
    this.babyBodyNumber = 20;
    for (var j = 0; j < this.babyBodyNumber; j++) {
        this.babyBody[j] = new Image();
        this.babyBody[j].src = "../img/babyFade" + j + ".png";
    }
    this.babyEyeDuration = 1000;
    this.babyEyeNumber = 2;
    for (var k = 0; k < this.babyEyeNumber; k++) {
        this.babyEye[k] = new Image();
        this.babyEye[k].src = "../img/babyEye" + k +".png";
    }
};
BabyFish.prototype.draw = function () {
    this.axisOriginX = closeToAimPosition(bigFish.axisOriginX + 50, this.axisOriginX, 0.08);
    this.axisOriginY = closeToAimPosition(bigFish.axisOriginY + 50, this.axisOriginY, 0.08);
    var bigFishAngle = Math.atan2(this.axisOriginY - bigFish.axisOriginY - 50, this.axisOriginX - bigFish.axisOriginX - 50);
    this.axisOriginAngle = closeToAimAngle(bigFishAngle, this.axisOriginAngle, 0.9);
    this.babyFishMonitor();

    canvasContextUpper.save();
    canvasContextUpper.translate(this.axisOriginX, this.axisOriginY);
    canvasContextUpper.rotate(this.axisOriginAngle);
    var currentBabyTail = this.babyTail[this.babyTailIndex];
    canvasContextUpper.drawImage(currentBabyTail, -currentBabyTail.width * 0.5 + 24, -currentBabyTail.height * 0.5);
    var currentBabyBody = this.babyBody[this.babyBodyIndex];
    canvasContextUpper.drawImage(currentBabyBody, -currentBabyBody.width * 0.5, -currentBabyBody.height * 0.5);
    var currentBabyEye = this.babyEye[this.babyEyeIndex];
    canvasContextUpper.drawImage(currentBabyEye, -currentBabyEye.width * 0.5, -currentBabyEye.height * 0.5);
    canvasContextUpper.restore();
};
BabyFish.prototype.babyFishMonitor = function() {
    this.babyTailTimer += interval;
    if (this.babyTailTimer > this.babyTailDuration) {
        this.babyTailIndex = (this.babyTailIndex + 1) % this.babyTailNumber;
        this.babyTailTimer %= this.babyTailDuration;
    }
    this.babyEyeTimer += interval;
    if (this.babyEyeTimer > this.babyEyeDuration) {
        this.babyEyeIndex = (this.babyEyeIndex + 1) % this.babyEyeNumber;
        this.babyEyeTimer %= this.babyEyeDuration;
        this.babyEyeDuration = this.babyEyeIndex === 0 ? Math.random() * 1500 + 2000 : 200;
    }
    this.babyBodyTimer += interval;
    if (this.babyBodyTimer > this.babyBodyDuration) {
        this.babyBodyIndex = this.babyBodyIndex + 1;
        this.babyBodyTimer %= this.babyBodyDuration;
        if (this.babyBodyIndex > this.babyBodyNumber -1) {
            this.babyBodyIndex = this.babyBodyNumber -1;
        } 
    }
};

