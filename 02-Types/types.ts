//Boolean
let isTrue : boolean = true;

//Number
let phone : number = 123456;

//Text
let txt : string = "Sample Text";

//Template string
let txtNew : string = "New " + txt;
let txtNew2: string = `New ${txt}`;

//Array
let count = [1,2,3,4];
let count1 : number[] = [1,2,3,4];
let count2 : Array<number> = [1,2,3,4];

//If you don't know the type and it will change later
//But be aware that any type will IGNORE TYPE CHECKING !!!
let anything : any = 4;
anything = "Hi I am String";
anything = false;

//Returning nothing
function greeter(name : string) : void{
    console.log("Hello, " + name);
}

//Enums
enum direction {
    Up, Right, Down, Left
}

let joyStick = 1;
if(joyStick===direction.Up){
    console.log("The array number is : " +direction.Up)
}