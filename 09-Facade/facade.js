var BlurayTheater = /** @class */ (function () {
    function BlurayTheater() {
    }
    BlurayTheater.prototype.on = function () {
        console.log("Blueray Player Is Turning ON...");
    };
    BlurayTheater.prototype.turnOff = function () {
        console.log("Blueray Player Is Turning OFF...");
    };
    BlurayTheater.prototype.play = function () {
        console.log("Blueray Player Is Playing The Disc...");
    };
    return BlurayTheater;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Amplifier Is Turning ON...");
    };
    Amplifier.prototype.turnOff = function () {
        console.log("Amplifier Is Turning OFF...");
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Set Source To:" + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log("Set Volume To:" + volumeLevel);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("The Lights Are Dimming...");
    };
    return Lights;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.turnOn = function () {
        console.log("Tv Is Turning ON...");
    };
    Tv.prototype.turnOff = function () {
        console.log("Tv Is Turning OFF...");
    };
    return Tv;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("PopcornMaker Is Turning ON...");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("PopcornMaker Is Turning OFF...");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("PopcornMaker Is Popping...");
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource("Default Source");
        this.amp.setVolume(33);
        this.bluray.on();
        this.bluray.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOn();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
var popcornMaker = new PopcornMaker();
var amp = new Amplifier();
var tv = new Tv();
var bluray = new BlurayTheater();
var lights = new Lights();
var homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker);
homeTheater.watchMovie();
homeTheater.endMovie();
