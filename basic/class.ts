class Person {
  private name : string ;
  public age :  number;
  public readonly carName :  string;

  public constructor(name: string, age:number, carName: string){
    this.name = name;
    this.age = age;
    this.carName = carName;
  }
  public getName():string{
    return this.name;
  }
}
const person = new Person("Mohammad", 12, "X Corolla");
person.age = 3;
console.log("getName function : ", person.getName()); // as person.name is not available .. 
// person.carName = "G Corolla"; // as readonly we can not assign value 
console.log("Car Name (readonly) : ", person.carName);

interface Shape{
  getArea : () => number;
}
class Rectangle implements  Shape{
  public constructor(protected readonly width : number,protected readonly height : number ) {
    
  }
  public getArea(): number {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  public constructor(width : number){
    super(width, width);
  }
  // getArea also available here .. 
}