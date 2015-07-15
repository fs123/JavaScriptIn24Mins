
var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method called get_status.
Quo.prototype.get_status = function ( ) {
    return this.status;
};




var add = function (a, b) {
    return a + b;
};

var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
console.log("sum -> " + sum);

// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
var status = Quo.prototype.get_status.apply(statusObject);
console.log("status -> " + status);