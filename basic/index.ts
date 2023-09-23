let fristName:string = "Mohammad";
console.log("Frist Name : ", fristName);

let v:any = true;
v = "String";

//type unknown is similler, but safer alternative to any 
console.log("---------------------------------------------------------")
console.log("type unknown is similler, but safer alternative to any ")
let w:unknown = "string";
// console.log(typeof w);
if(typeof w === 'object' && w !== null){
  console.log("W is object ..")
}else if (typeof w === 'string'){
  console.log("W is string ..")
}else{
  console.log("Sorry can not tell W's type")
}
console.log('\n')
console.log("---------------------------------------------------------")

// undefined and null type
let y : undefined = undefined;
let z : null = null;

console.log("---------------------------------------------------------")

console.log("Defining Array ")

const myArray: any[] = ['hello' , "Sheakh"];
myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");

myArray.forEach((singleValue) => {
  console.log(singleValue);
})
console.log("----- readonly keyword in array --------")
const myArrayAgain: readonly string[] = ['hello' , "Sheakh"];

myArrayAgain.forEach((singleValue) => {
  console.log(singleValue);
})        
console.log("  //  array.push() method gives error, as array initialize with readonly keyword")
console.log('\n')
console.log("--------------------------- Tuple ------------------------------")

let ourTuple : [number, boolean, string];
ourTuple = [3, false, 'String Value'];
console.log(ourTuple, "order is important");

ourTuple.push('Something new and wrong');

console.log(ourTuple, "after pushing new element");

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real '];

console.log(ourReadonlyTuple, "as this tuple is readonly, we can not add new element");

const graph : [x:number, xy:number] = [3,3]; // named tuple 
const [x, xy] = graph; // destructuring tuple
console.log('\n')
console.log("------------------------- Object type --------------------------------")

const car : {
  type : string,
  model : string,
  year? : number, // optional 
} = {
  type : "sedan",
  model : "x corolla",
  year : 2017,
}

console.log("car object : ", car)

// index signature in object
const nameOfAll : { [index : string]: string } = {};
nameOfAll.jack = "jack";
nameOfAll.jack1 = "jack1";
nameOfAll.jack2 = "jack2";
nameOfAll.jack3 = "jack3";

console.log("index signature in object : ", nameOfAll)

console.log('\n')
console.log("-------------------- String Enums -------------------------------------")

enum directions {
  east = 'east', 
  west = 'west'
}
console.log("Print east value from enum : ", directions.east);
console.log('\n')
console.log("--------------------- Type Alias ------------------------------------")

type CarYear = number
type CarType = string

type Car = {
  year: CarYear,
  type: CarType,
  
}

const CarYear: CarYear = 2001
const CarType: CarType = "Toyota"

const Car: Car = {
  year: CarYear,
  type: CarType,
  
};

console.log("Interface are better than type alias");

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

// we can extend the interface

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log("---------------------- Ts Union Types -----------------------------------")

// when value can be more than a single type 

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

console.log("--------------------- Ts Functions ------------------------------------")
function getTime() : number // return type 
{
  return new Date().getTime();
}
// if there is no return type . then return type should be void 
function seyHello() : void 
{
  console.log("Say hello from hello function ")
}

// optional parameter 
function add ( a : number, b: number, c?:number) : number {
  return a + b + ( c || 0); // c thakle valo , na thakle zero 
}
// default parameter 
function defaultParameter ( a: number , b: number = 10) : number {
  return a + b; // b er value provide na korle, default value 10 assign hobe .. 
}

// named parameter 
function named ( {a, b} : {a: number, b : number}) : number {
  return a+b ;
}

// rest parameter 
function addAllValue (a: number, b: number, ...rest: number[]) : number{
  return a + b + rest.reduce((p, c) => p+c , 0);
}
console.log("---------------------------------------------------------")

console.log("")
