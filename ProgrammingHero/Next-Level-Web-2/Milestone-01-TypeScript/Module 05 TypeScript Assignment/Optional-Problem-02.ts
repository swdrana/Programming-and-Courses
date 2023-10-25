// Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.
type myType<T> = T extends string ? string : T extends number ? number : null;

// Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.
interface Person {
    name:string;
    age:myType<string>;
}
// Finally, create an object that satisfies the Person interface and log it to the console.
const myObj:Person = {
    name:'Rana',
    age:'45'
}
console.log(myObj.name)
console.log(myObj.age)
export {};