function bigFishFruitCollisionDetection() {
    for (var i = 0; i < fruit.number; i++) {
        if (fruit.alive[i]) {
            var currentPoint = new Point();
            currentPoint.setXY(bigFish.axisOriginX, bigFish.axisOriginY);
            var aimPoint = new Point(fruit.bornPositionX[i], fruit.bornPositionY[i]);
            aimPoint.setXY(fruit.bornPositionX[i], fruit.bornPositionY[i]);
            var distance = distanceDetection(aimPoint, currentPoint);
            if (distance < 900) {
                fruit.dead(i);
            }
        }
    }
}
var Point = function() {
    this.x = 0;
    this.y = 0;
};
Point.prototype.setXY = function (x, y) {
    this.x = x;
    this.y = y;
};