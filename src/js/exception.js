

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
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
