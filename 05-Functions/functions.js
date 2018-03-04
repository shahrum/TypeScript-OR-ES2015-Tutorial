"use strict";
function greet(firstName, lastName) {
    console.log("Hello, " + firstName + " " + lastName);
}
//optional LastName without default value
function greet1(firstName, lastName) {
    if (lastName != null) {
        console.log("Hello, " + firstName + " " + lastName);
    }
    else {
        console.log("Hello, " + firstName);
    }
}
//optional lastName with default value
function greet2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Hossinabadi"; }
    console.log("Hello, " + firstName + " " + lastName);
}
greet("Shahram", "Hosseinabadi");
greet1("Shahram");
greet2("Shahram");
greet2("Shahram", "Benjamin");
//# sourceMappingURL=functions.js.map