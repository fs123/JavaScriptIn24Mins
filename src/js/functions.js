
var add = function (a, b) {
    return a + b;
};

var sum = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
