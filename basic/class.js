var Person = /** @class */ (function () {
    function Person(name, age, carName) {
        this.name = name;
        this.age = age;
        this.carName = carName;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Mohammad", 12, "X Corolla");
person.age = 3;
console.log("getName function : ", person.getName()); // as person.name is not available .. 
// person.carName = "G Corolla"; // as readonly we can not assign value 
console.log("Car Name (readonly) : ", person.carName);
