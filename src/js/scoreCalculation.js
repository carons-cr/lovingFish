var ScoreCalculation = function () {
    this.eatenFruitNum = 0;
    this.fruitScore = 0;
};
ScoreCalculation.prototype.init = function () {
    this.fruitScore = 1;
};
ScoreCalculation.prototype.draw = function () {
    canvasContextUpper.fillStyle = "white";
    canvasContextUpper.fillText("eatenFruitNum " + this.eatenFruitNum, canvasWidth * 0.5, canvasHeight -50);
    canvasContextUpper.fillText("fruitScore " + this.fruitScore, canvasWidth * 0.5, canvasHeight  - 80);
};
ScoreCalculation.prototype.reset = function () {
    scoreCalculation.eatenFruitNum = 0;
    scoreCalculation.fruitScore = 1;
};