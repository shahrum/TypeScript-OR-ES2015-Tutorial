// this class is a SUBJECT because other class monitor this class!!
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemprature = function (temp) {
        console.log("The weather temprature is : " + temp + "C");
        this.temperature = temp;
        this.notifyObservers();
    };
    //which observer watch this subject
    WeatherStation.prototype.registerObservers = function (o) {
        this.observers.push(o);
    };
    //which observer don't need to observe anymore
    WeatherStation.prototype.removeObservers = function (o) {
        //first find the index of observer in observer array
        var index = this.observers.indexOf(o);
        //remove it by splice method
        this.observers.splice(index, 1);
    };
    //notify the observer need to be notify
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    return WeatherStation;
}());
// this class is a OBSERVER because observe other class!!
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObservers(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log("Temprature is : I need to update mySelf");
        // your logic would go here...
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObservers(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Temprature is more than 25C so  I need to turning mySelf ON...");
            // your logic would go here...
        }
        else {
            console.log("Temprature is more than 25C so  I need to turning mySelf OFF...");
            // your logic would go here...
        }
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
var temperatureDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemprature(20);
weatherStation.setTemprature(30);
