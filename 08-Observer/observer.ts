interface Subject{
    //which observer watch this subject
    registerObservers(o: Observer);
    //which observer don't need to observe anymore
    removeObservers(o: Observer);
    //notify the observer need to be notify
    notifyObservers();
}
interface Observer{
    update(temperature: number);
}
// this class is a SUBJECT because other class monitor this class!!
class WeatherStation implements Subject{

    private temperature : number;
    private observers :Observer[] =[];

    setTemprature(temp:number){
        console.log("The weather temprature is : " + temp + "C");
        this.temperature=temp;
        this.notifyObservers();
    }
    //which observer watch this subject
    registerObservers(o: Observer) {
        this.observers.push(o);
    }
    //which observer don't need to observe anymore
    removeObservers(o: Observer) {
        //first find the index of observer in observer array
        let index = this.observers.indexOf(o);
        //remove it by splice method
        this.observers.splice(index,1);
    }
    //notify the observer need to be notify
    notifyObservers() {
        for(let observer of this.observers){
            observer.update(this.temperature);
        }
    }
    
}
// this class is a OBSERVER because observe other class!!
class TemperatureDisplay implements Observer {
    //we want to say to our weather station that we want to be notify after update
    private subject : Subject;
    constructor(weatherStation:Subject){
        this.subject=weatherStation;
        weatherStation.registerObservers(this);
    }
    update(temperature: number) {
        console.log("Temprature is : I need to update mySelf");
        // your logic would go here...
    }
}

class Fan implements Observer {
    private subject:Subject;
    constructor(weatherStation:Subject){
        this.subject=weatherStation;
        weatherStation.registerObservers(this);
    }
    update(temperature: number) {
        if(temperature > 25){
            console.log("Temprature is more than 25C so  I need to turning mySelf ON...");
            // your logic would go here...
        }
        else{
            console.log("Temprature is more than 25C so  I need to turning mySelf OFF...");
            // your logic would go here...
        }
    }
}

let weatherStation = new WeatherStation();
let temperatureDisplay = new TemperatureDisplay(weatherStation);

let fan = new Fan(weatherStation);
weatherStation.setTemprature(20);
weatherStation.setTemprature(30);