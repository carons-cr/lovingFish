var ScoreCalculation = function () {
    this.eatenFruitNumber = 0;
    this.fruitScore = 0;
    this.totalScore = 0;
    this.transparencyAlpha = 0;
};
ScoreCalculation.prototype.init = function () {
    this.fruitScore = 1;
    canvasContextUpper.fillStyle = "white";
    canvasContextUpper.font = "30px Verdana";
    canvasContextUpper.textAlign = "center";
    canvasContextUpper.shadowBlur = 8;
    canvasContextUpper.shadowColor = "white";
};
ScoreCalculation.prototype.draw = function () {
    canvasContextUpper.save();
    canvasContextUpper.fillText("TOTALSCORE: " + this.totalScore, canvasWidth*0.5, canvasHeight - 50);
    if (!babyFish.alive) {
        this.transparencyAlpha =  this.transparencyAlpha > 1 ? 1 : this.transparencyAlpha + interval*0.0005;
        canvasContextUpper.fillStyle = "rgba(255, 255, 255, " + this.transparencyAlpha + ")";
        canvasContextUpper.fillText("GAMEOVER", canvasWidth*0.5, canvasHeight*0.5);
    }
    canvasContextUpper.restore();
};
ScoreCalculation.prototype.addScore = function () {
    this.totalScore += this.eatenFruitNumber*this.fruitScore*100;
    this.eatenFruitNumber = 0;
};