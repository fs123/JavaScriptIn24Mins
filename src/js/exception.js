

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        // we could also throw another object (e.g. a string), but then we have no callstack
        throw new TypeError('add needs numbers');
    }
    return a + b;
}

try {
    add("seven");
} catch (e) {
    console.log("Name: " + e.name);
    console.log("Message: " + e.message);
    console.log("Stacktrac: " + e.stack);
}
finally
{
    console.log("FINALY");
}
