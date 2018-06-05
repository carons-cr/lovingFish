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
    this.babyTailInit();
    this.babyBodyInit();
    this.babyEyeInit();
};
BabyFish.prototype.babyTailInit = function() {
    this.babyTailDuration = 50;
    this.babyTailNumber = 8;
    for (var i = 0; i < this.babyTailNumber; i++) {
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "../img/babyTail" + i + ".png";
    }
};
BabyFish.prototype.babyBodyInit = function() {
    this.babyBodyDuration = 450;
    this.babyBodyNumber = 20;
    for (var i = 0; i < this.babyBodyNumber; i++) {
        this.babyBody[i] = new Image();
        this.babyBody[i].src = "../img/babyFade" + i + ".png";
    }
};
BabyFish.prototype.babyEyeInit = function() {
    this.babyEyeDuration = 1000;
    this.babyEyeNumber = 2;
    for (var i = 0; i < this.babyEyeNumber; i++) {
        this.babyEye[i] = new Image();
        this.babyEye[i].src = "../img/babyEye" + i +".png";
    }
};
BabyFish.prototype.draw = function () {
    this.axisOriginX = closeToAimPosition(bigFish.axisOriginX + 50, this.axisOriginX, 0.08);
    this.axisOriginY = closeToAimPosition(bigFish.axisOriginY + 50, this.axisOriginY, 0.08);
    var bigFishAngle = Math.atan2(this.axisOriginY - bigFish.axisOriginY - 50, this.axisOriginX - bigFish.axisOriginX - 50);
    this.axisOriginAngle = closeToAimAngle(bigFishAngle, this.axisOriginAngle, 0.9);
    this.babyFishMonitor();
    var currentBabyTail = this.babyTail[this.babyTailIndex];
    var currentBabyBody = this.babyBody[this.babyBodyIndex];
    var currentBabyEye = this.babyEye[this.babyEyeIndex];

    canvasContextUpper.save();
    canvasContextUpper.translate(this.axisOriginX, this.axisOriginY);
    canvasContextUpper.rotate(this.axisOriginAngle);
    canvasContextUpper.drawImage(currentBabyTail, -currentBabyTail.width * 0.5 + 24, -currentBabyTail.height * 0.5);
    canvasContextUpper.drawImage(currentBabyBody, -currentBabyBody.width * 0.5, -currentBabyBody.height * 0.5);
    canvasContextUpper.drawImage(currentBabyEye, -currentBabyEye.width * 0.5, -currentBabyEye.height * 0.5);
    canvasContextUpper.restore();
};
BabyFish.prototype.babyFishMonitor = function() {
    this.babyTailMonitor();
    this.babyBodyMonitor();
    this.babyEyeMonitor();
};
BabyFish.prototype.babyTailMonitor = function(){
    this.babyTailTimer += interval;
    if (this.babyTailTimer > this.babyTailDuration) {
        this.babyTailIndex = (this.babyTailIndex + 1) % this.babyTailNumber;
        this.babyTailTimer %= this.babyTailDuration;
    }
};
BabyFish.prototype.babyBodyMonitor = function() {
    this.babyBodyTimer += interval;
    if (this.babyBodyTimer > this.babyBodyDuration) {
        this.babyBodyIndex = this.babyBodyIndex + 1;
        this.babyBodyTimer %= this.babyBodyDuration;
        if (this.babyBodyIndex > this.babyBodyNumber -1) {
            this.babyBodyIndex = this.babyBodyNumber -1;
        }
    }
};
BabyFish.prototype.babyEyeMonitor = function() {
    this.babyEyeTimer += interval;
    if (this.babyEyeTimer > this.babyEyeDuration) {
        this.babyEyeIndex = (this.babyEyeIndex + 1) % this.babyEyeNumber;
        this.babyEyeTimer %= this.babyEyeDuration;
        this.babyEyeDuration = this.babyEyeIndex === 0 ? Math.random() * 1500 + 2000 : 200;
    }
};
BabyFish.prototype.revive = function () {
    this.babyBodyIndex = 0;
};



