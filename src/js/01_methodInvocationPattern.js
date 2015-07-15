// Method is stored as a property of an object.

// THIS handling:
// This is bound to that object. The binding of this to the object happens at invocation time!
// Methods that get their object context from this are called public methods.


var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment( );
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3