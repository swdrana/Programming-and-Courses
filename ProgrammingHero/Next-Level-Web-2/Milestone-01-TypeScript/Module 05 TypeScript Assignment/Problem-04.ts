// Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class Person{
    constructor(public name:string, public age:number){

    }
    public getDetails = ():string =>{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
class Student extends Person{
    
    private grade;
    constructor(grade:string){
        super('Rana',26)
        this.grade=grade;
    }
    public getGrade():string{
        return this.grade;
    }
}
const std1 = new Student('A+');
console.log(std1.getDetails())
