var Iphone6 = /** @class */ (function () {
    function Iphone6() {
    }
    Iphone6.prototype.useLightening = function () {
        console.log("using Lightening port...");
    };
    return Iphone6;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUsb = function () {
        console.log("using Micro-USB port...");
    };
    return GooglePixel;
}());
var LighteningToMicroUsbAdapter = /** @class */ (function () {
    function LighteningToMicroUsbAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LighteningToMicroUsbAdapter.prototype.useMicroUsb = function () {
        console.log("want to use micro usb, converting to lightening...");
        this.iphoneDevice.useLightening();
    };
    return LighteningToMicroUsbAdapter;
}());
var iphone = new Iphone6();
var chargeAdapter = new LighteningToMicroUsbAdapter(iphone);
chargeAdapter.useMicroUsb();
