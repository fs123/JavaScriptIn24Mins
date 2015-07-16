var flight = {
    airline: "EasyJet",
    number: 815,
    departure: {
        IATA: "BSL",
        time: "2015-07-19 8:25",
        city: "Basel"
    },
    arrival: {
        IATA: "BAT",
        time: "2015-07-28 9:42",
        city: "Bastia"
    },
    "with space" : false
};




flight["NuMber"] // undefined
flight["number"] // 815
flight.number // 815

flight.status // undefined
flight.status = "READY";
flight["status"]; // READY

flight.equipment    // undefined
var equipment = flight.equipment || "unknown"; // fallback
try {
    flight.equipment.model  // throw "TypeError"
} catch (e) {
    console.log("Uups: " + e.stack);
}
flight.equipment && flight.equipment.model  // undefined


// Reflection
typeof flight.number    // 'number'
typeof flight.status    // 'string'
typeof flight.arrival   // 'object'
typeof flight.manifest  // 'undefined'

typeof flight.toString    // 'function'
typeof flight.constructor // 'function'

flight.hasOwnProperty('number')         // true
flight.hasOwnProperty('constructor')    // false


//
console.log("Properties of object flight:");
var name;
for (name in flight) {
    if (typeof flight[name] !== 'function') {
        console.log(" - flight." + name + ' => ' + flight[name] + ' [' + typeof flight[name] + ']');
    }
}