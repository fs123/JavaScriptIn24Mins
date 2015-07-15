// If a function is invoked with the new prefix, then a new object will be
// created with a hidden link to the value of the function’s prototype member,
// and this will be bound to that new object.

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method called get_status.
Quo.prototype.get_status = function ( ) {
    return this.status;
};

// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status( )); // confused

