class Greeter{
    firstname= "Shahram";
  
    sayHello(){
        setTimeout(()=>{
        //setTimeout(function(){

            //--because setTimeout the word "this" would no longer point to class object!!!
            //--now it is pointing to wondow objects!!!
            console.log("Hello, " + this.firstname);
        }, 500);
    }
}

let theGreeter = new Greeter();
theGreeter.sayHello();