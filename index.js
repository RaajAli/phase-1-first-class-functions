function receivesAFunction(callBack) {
    return callBack();

}

console.log(receivesAFunction(function() { 
    return "Hello";}));

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");
    };
}
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function");
    };
}