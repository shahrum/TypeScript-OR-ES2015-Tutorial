class BlurayTheater{
    on(){
        console.log("Blueray Player Is Turning ON...");
    }
    turnOff(){
        console.log("Blueray Player Is Turning OFF...");
    }
    play(){
        console.log("Blueray Player Is Playing The Disc...");
    }
}

class Amplifier{
    on(){
        console.log("Amplifier Is Turning ON...");
    }
    turnOff(){
        console.log("Amplifier Is Turning OFF...");
    }
    setSource(source:string){
        console.log("Set Source To:" + source);
    }
    setVolume(volumeLevel:number){
        console.log("Set Volume To:" + volumeLevel);
    }
}

class Lights{
    dim(){
        console.log("The Lights Are Dimming...");
    }

}

class Tv{
    turnOn(){
        console.log("Tv Is Turning ON...");
    }
    turnOff(){
        console.log("Tv Is Turning OFF...");
    }
}
class PopcornMaker{
    turnOn(){
        console.log("PopcornMaker Is Turning ON...");
    }
    turnOff(){
        console.log("PopcornMaker Is Turning OFF...");
    }
    pop(){
        console.log("PopcornMaker Is Popping...");
    }
}

class HomeTheaterFacade{
    private bluray : BlurayTheater;
    private amp : Amplifier;
    private lights:Lights;
    private tv: Tv;
    private popcornMaker: PopcornMaker;
    
    constructor(bluray:BlurayTheater, amp:Amplifier, lights:Lights, tv:Tv, popcornMaker:PopcornMaker){
        this.bluray=bluray;
        this.amp=amp;
        this.lights=lights;
        this.tv=tv;
        this.popcornMaker=popcornMaker;
    }

    public watchMovie(){
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource("Default Source");
        this.amp.setVolume(33);
        this.bluray.on();
        this.bluray.play();
    }

    public endMovie(){
        this.popcornMaker.turnOn();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    }
}

let popcornMaker = new PopcornMaker();
let amp= new Amplifier();
let tv = new Tv();
let bluray = new BlurayTheater();
let lights = new Lights();

let homeTheater = new HomeTheaterFacade(bluray,amp,lights,tv,popcornMaker);
homeTheater.watchMovie();
homeTheater.endMovie();