function greet(firstName:string,lastName:string):void{
    console.log("Hello, "+ firstName + " " + lastName);
}

//optional LastName without default value
function greet1(firstName:string,lastName?:string):void{
    if(lastName!=null)
    {
        console.log("Hello, "+ firstName + " " + lastName);
    }
    else{
        console.log("Hello, "+ firstName);
    }
}

//optional lastName with default value
function greet2(firstName:string,lastName :string ="Hossinabadi"):void{
    console.log("Hello, "+ firstName + " " + lastName);
}

greet("Shahram","Hosseinabadi");
greet1("Shahram");
greet2("Shahram");
greet2("Shahram","Benjamin");