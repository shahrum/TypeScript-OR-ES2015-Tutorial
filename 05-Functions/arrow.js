var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstname = "Shahram";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            //setTimeout(function(){
            //--because setTimeout the word "this" would no longer point to class object!!!
            //--now it is pointing to wondow objects!!!
            console.log("Hello, " + _this.firstname);
        }, 500);
    };
    return Greeter;
}());
var theGreeter = new Greeter();
theGreeter.sayHello();
