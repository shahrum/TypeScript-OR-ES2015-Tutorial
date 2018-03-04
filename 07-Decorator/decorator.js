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
//definte an abstract calss because we donot want to have any car(donot instantiate from car) but just we want to extends from car class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 75000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 80000;
    };
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Enhanced with AutoPilot.";
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5180;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var EnhancedRearSeat = /** @class */ (function (_super) {
    __extends(EnhancedRearSeat, _super);
    function EnhancedRearSeat(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedRearSeat.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ", Enhanced with Rear Seat.";
    };
    EnhancedRearSeat.prototype.cost = function () {
        return this.decoratedCar.cost() + 2250;
    };
    return EnhancedRearSeat;
}(CarOptions));
var myTesla = new ModelS();
myTesla = new EnhancedRearSeat(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
