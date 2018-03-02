//Boolean
var isTrue = true;
//Number
var phone = 123456;
//Text
var txt = "Sample Text";
//Template string
var txtNew = "New " + txt;
var txtNew2 = "New " + txt;
//Array
var count = [1, 2, 3, 4];
var count1 = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
//If you don't know the type and it will change later
//But be aware that any type will IGNORE TYPE CHECKING !!!
var anything = 4;
anything = "Hi I am String";
anything = false;
//Returning nothing
function greeter(name) {
    console.log("Hello, " + name);
}
//Enums
var direction;
(function (direction) {
    direction[direction["Up"] = 0] = "Up";
    direction[direction["Right"] = 1] = "Right";
    direction[direction["Down"] = 2] = "Down";
    direction[direction["Left"] = 3] = "Left";
})(direction || (direction = {}));
var joyStick = 1;
if (joyStick === direction.Up) {
    console.log("The array number is : " + direction.Up);
}
