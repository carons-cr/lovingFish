var ScoreCalculation = function () {
    this.eatenFruitNumber = 0;
    this.fruitScore = 0;
    this.totalScore = 0;
};
ScoreCalculation.prototype.init = function () {
    this.fruitScore = 1;
    canvasContextUpper.fillStyle = "white";
    canvasContextUpper.font = "30px Verdana";
    canvasContextUpper.textAlign = "center";
};
ScoreCalculation.prototype.draw = function () {
    canvasContextUpper.fillText("fruitScore " + this.fruitScore, canvasWidth*0.5, canvasHeight  - 100);
    canvasContextUpper.fillText("totalScore" + this.totalScore, canvasWidth*0.5, canvasHeight - 50);
};
ScoreCalculation.prototype.addScore = function () {
    this.totalScore += this.eatenFruitNumber*this.fruitScore*100;
    this.eatenFruitNumber = 0;
};