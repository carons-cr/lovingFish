var Anemone = function () {
    this.width = new Array();
    this.height = new Array();
};
Anemone.prototype.number = 50;
Anemone.prototype.init = function () {
    for (var i = 0; i < this.number; i++) {
        this.width[i] = i * 10 + Math.random() * 20;
        this.height[i] = 200 + Math.random() * 50;
    }
    console.log("a");
};
Anemone.prototype.draw = function () {

};
