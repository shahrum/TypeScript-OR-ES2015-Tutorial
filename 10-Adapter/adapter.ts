interface Iphone{
    useLightening();
}
interface Android{
    useMicroUsb();
}

class Iphone6 implements Iphone{
    useLightening(){
        console.log("using Lightening port...");
    }
}

class GooglePixel implements Android{
    useMicroUsb(){
        console.log("using Micro-USB port...");
    }
}

class LighteningToMicroUsbAdapter implements Android{
    
    private iphoneDevice: Iphone;
    constructor(iphone:Iphone){
        this.iphoneDevice=iphone;
    }
    useMicroUsb() {
        console.log("want to use micro usb, converting to lightening...");
        this.iphoneDevice.useLightening();
    }
}

let iphone = new Iphone6();
let chargeAdapter = new LighteningToMicroUsbAdapter(iphone);
chargeAdapter.useMicroUsb();