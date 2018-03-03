
//Just pay attention when you define a clss abstract you can extend from it but you can intatiate it.
//abstract class Animal{
class Animal{
    name : string;

    constructor(theName: string) {
        this.name=theName;
    }

    walk(distance:number):void{
        console.log("The " + this.name + " ran over "+ distance + "KM!");
    }
}

let theAnimal = new Animal("Lion");
theAnimal.walk(150);

//inheritance
class Bird extends Animal{
   
    constructor(theName:string) {
        //send theName to its parents constructor
        super(theName);
    }

    walk(distance:number){
        console.log("The "+ this.name + " don't walk they fly over "+ distance + "KM!");
    }
}

