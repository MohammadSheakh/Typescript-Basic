var fristName = "Mohammad";
console.log("Frist Name : ", fristName);
var v = true;
v = "String";
//type unknown is similler, but safer alternative to any 
console.log("---------------------------------------------------------");
console.log("type unknown is similler, but safer alternative to any ");
var w = "string";
// console.log(typeof w);
if (typeof w === 'object' && w !== null) {
    console.log("W is object ..");
}
else if (typeof w === 'string') {
    console.log("W is string ..");
}
else {
    console.log("Sorry can not tell W's type");
}
console.log('\n');
console.log("---------------------------------------------------------");
// undefined and null type
var y = undefined;
var z = null;
console.log("---------------------------------------------------------");
console.log("Defining Array ");
var myArray = ['hello', "Sheakh"];
myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");
myArray.forEach(function (singleValue) {
    console.log(singleValue);
});
console.log("----- readonly keyword in array --------");
var myArrayAgain = ['hello', "Sheakh"];
myArrayAgain.forEach(function (singleValue) {
    console.log(singleValue);
});
console.log("  //  array.push() method gives error, as array initialize with readonly keyword");
console.log('\n');
console.log("--------------------------- Tuple ------------------------------");
var ourTuple;
ourTuple = [3, false, 'String Value'];
console.log(ourTuple, "order is important");
ourTuple.push('Something new and wrong');
console.log(ourTuple, "after pushing new element");
var ourReadonlyTuple = [5, true, 'The Real '];
console.log(ourReadonlyTuple, "as this tuple is readonly, we can not add new element");
var graph = [3, 3]; // named tuple 
var x = graph[0], xy = graph[1]; // destructuring tuple
console.log('\n');
console.log("------------------------- Object type --------------------------------");
var car = {
    type: "sedan",
    model: "x corolla",
    year: 2017,
};
console.log("car object : ", car);
// index signature in object
var nameOfAll = {};
nameOfAll.jack = "jack";
nameOfAll.jack1 = "jack1";
nameOfAll.jack2 = "jack2";
nameOfAll.jack3 = "jack3";
console.log("index signature in object : ", nameOfAll);
console.log('\n');
console.log("-------------------- String Enums -------------------------------------");
var directions;
(function (directions) {
    directions["east"] = "east";
    directions["west"] = "west";
})(directions || (directions = {}));
console.log("Print east value from enum : ", directions.east);
console.log('\n');
console.log("--------------------- Type Alias ------------------------------------");
console.log("---------------------------------------------------------");
console.log("");
