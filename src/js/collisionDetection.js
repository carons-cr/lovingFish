
function bigFishFruitCollisionDetection() {
    var bigFishPoint = new Point(bigFish.axisOriginX, bigFish.axisOriginY);
    for (var i = 0; i < fruit.number; i++) {
        if (fruit.alive[i]) {
            var fruitPoint = new Point(fruit.bornPositionX[i], fruit.bornPositionY[i]);
            var distance = distanceDetection(fruitPoint, bigFishPoint);
            if (distance < 900) {
                bigFishEatingFruit(i);
            }
        }
    }
}
function bigFishEatingFruit(i) {
    fruit.dead(i);
    scoreCalculation.eatenFruitNumber++;
    bigFish.bigBodyIndex = bigFish.bigBodyIndex >= 7 ? 7 : bigFish.bigBodyIndex + 1;
    scoreCalculation.fruitScore = fruit.fruitType[i] === "orange" ? 1 : 2;
    whiteHalo.born(fruit.bornPositionX[i], fruit.bornPositionY[i]);
}
function  bigFishBabyFishCollisionDetection() {
    var bigFishPoint = new Point(bigFish.axisOriginX, bigFish.axisOriginY);
    var babyFishPoint = new Point(babyFish.axisOriginX, babyFish.axisOriginY);
    var distance = distanceDetection(babyFishPoint, bigFishPoint);
    if (scoreCalculation.eatenFruitNumber > 0 && distance < 900) {
        bigFishFeedingBabyFish();
    }
}
function bigFishFeedingBabyFish() {
    babyFish.revive();
    bigFish.recover();
    scoreCalculation.addScore();
    orangeHalo.born(babyFish.axisOriginX, babyFish.axisOriginY);
}
var Point = function(x, y) {
    this.x = x;
    this.y = y;
};


