var BigFish = function () {
    this.axisOriginX = 0;
    this.axisOriginY = 0;
    this.axisOriginAngle = 0;

    this.bigTail = [];
    this.bigTailNumber = 0;
    this.bigTailDuration = 0;
    this.bigTailTimer = 0;
    this.bigTailIndex = 0;

    this.bigBodyOrange = [];
    this.bigBodyBlue = [];
    this.bigBodyNumber = 0;
    this.bigBodyIndex = 0;

    this.bigEye = [];
    this.bigEyeNumber = 0;
    this.bigEyeDuration = 0;
    this.bigEyeTimer = 0;
    this.bigEyeIndex = 0;

};
BigFish.prototype.init = function () {
    this.axisOriginX = canvasWidth*0.5;
    this.axisOriginY = canvasHeight*0.5;
    this.bigTailInit();
    this.bigBodyInit();
    this.bigEyeInit();
};
BigFish.prototype.bigTailInit = function () {
    this.bigTailDuration = 50;
    this.bigTailNumber = 8;
    for (var i = 0; i < this.bigTailNumber; i++) {
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "../img/bigTail" + i + ".png";
    }
};
BigFish.prototype.bigBodyInit = function () {
    this.bigBodyNumber = 8;
    for (var i = 0; i < this.bigBodyNumber; i++) {
        this.bigBodyOrange[i] = new Image();
        this.bigBodyOrange[i].src = "../img/bigSwim" + i + ".png";
        this.bigBodyBlue[i] = new Image();
        this.bigBodyBlue[i].src = "../img/bigSwimBlue" + i + ".png";
    }
};
BigFish.prototype.bigEyeInit = function () {
    this.bigEyeDuration = 1000;
    this.bigEyeNumber = 2;
    for (var i = 0; i < this.bigEyeNumber; i++) {
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "../img/bigEye" + i + ".png";
    }
};
BigFish.prototype.draw = function () {
    this.axisOriginX = closeToAimPosition(mousePositionX, this.axisOriginX, 0.3);
    this.axisOriginY = closeToAimPosition(mousePositionY, this.axisOriginY, 0.3);
    var mouseAngle = Math.atan2(this.axisOriginY - mousePositionY, this.axisOriginX - mousePositionX);
    this.axisOriginAngle = closeToAimAngle(mouseAngle, this.axisOriginAngle, 0.9);
    this.bigFishMonitor();
    var currentBigTail = this.bigTail[this.bigTailIndex];
    var currentBigBody = scoreCalculation.fruitScore===1 ? this.bigBodyOrange[this.bigBodyIndex] : this.bigBodyBlue[this.bigBodyIndex];
    var currentBigEye = this.bigEye[this.bigEyeIndex];

    canvasContextUpper.save();
    canvasContextUpper.translate(this.axisOriginX, this.axisOriginY);
    canvasContextUpper.rotate(this.axisOriginAngle);
    canvasContextUpper.drawImage(currentBigTail, -currentBigTail.width*0.5 + 30, -currentBigTail.height*0.5);
    canvasContextUpper.drawImage(currentBigBody, -currentBigBody.width*0.5, -currentBigBody.height*0.5);
    canvasContextUpper.drawImage(currentBigEye, -currentBigEye.width*0.5, -currentBigEye.height*0.5);
    canvasContextUpper.restore();
};
BigFish.prototype.bigFishMonitor = function () {
    this.bigTailMonitor();
    this.bigEyeMonitor();
};
BigFish.prototype.bigTailMonitor = function () {
    this.bigTailTimer += interval;
    if (this.bigTailTimer > this.bigTailDuration) {
        this.bigTailIndex = (this.bigTailIndex + 1) % 8;
        this.bigTailTimer %= this.bigTailDuration;
    }
};
BigFish.prototype.bigEyeMonitor = function () {
    this.bigEyeTimer += interval;
    if (this.bigEyeTimer > this.bigEyeDuration) {
        this.bigEyeIndex = (this.bigEyeIndex + 1) % 2;
        this.bigEyeTimer %= this.bigEyeDuration;
        this.bigEyeDuration = this.bigEyeIndex === 0 ? Math.random()*1500 + 2000 : 200;
    }
};
BigFish.prototype.recover = function () {
    this.bigBodyIndex = 0;
};

