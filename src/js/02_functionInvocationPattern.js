
var add = function (a, b) {
    return a + b;
};

myObject = {
    value: 1
};

myObject.double = function ( ) {
    var that = this; // Workaround.
    var helper = function ( ) {
        that.value = add(that.value, that.value);
    };
    helper( ); // Invoke helper as a function.

};
// Invoke double as a method.
myObject.double( );
console.log(myObject.value);



/*
 this.helper2 = function ( ) {
 that.value = add(this.value, this.value);
 };
 this.helper2();
 */