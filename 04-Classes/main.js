var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Just pay attention when you define a clss abstract you can extend from it but you can intatiate it.
//abstract class Animal{
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("The " + this.name + " ran over " + distance + "KM!");
    };
    return Animal;
}());
var theAnimal = new Animal("Lion");
theAnimal.walk(150);
//inheritance
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(theName) {
        //send theName to its parents constructor
        return _super.call(this, theName) || this;
    }
    Bird.prototype.walk = function (distance) {
        console.log("The " + this.name + " don't walk they fly over " + distance + "KM!");
    };
    return Bird;
}(Animal));
