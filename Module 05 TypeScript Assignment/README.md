# Milestone 01 - TypeScript Problem Assignment

## Interview Questions

### 1. What is TypeScript, and how is it different from JavaScript?

TypeScript is Superset of Javascript. thats means- all JavaScript features have in the TypeScript and additionally have more features then JavaScript.

-- Different:

- TypeScript is statically Type, JavaScript Dynamically Type
- TypeScript throw error when we write the code where JavaScript throw error runtime.
- TypeScript need write to more line of code where JavaScript is shorter line of code.
- Typescript is developer friendly where JavaScript is User friendly.

### 2. Can you explain the difference between "interface" and "type" in TypeScript?

interface: it is more then type. it is a class type. to use it we use: implements or extended keyword.

type: this is simple type checker. we can use it to fixed dynamically type to statically type. we can use `|` and `&` sign for union or intersection.

### 3. Can you give an example of how to use generics in TypeScript?

at first need to declear a function then after the function name need to declear generic symble `<>` inside this we set the generic variable `T`. after that when need to pass parameter we the the type of that parameter : `T` type.

```typescript
const myFun = <T>(age: T) => {
  if (typeof age === "number") {
    console.log("Age is a number:", age);
  } else if (typeof age === "string") {
    console.log("Age is a string:", age);
  } else {
    console.log("Invalid input:", age);
  }
};

myFun(3); // Output: "Age is a number: 3"
myFun("3"); // Output: "Age is a string: 3"
myFun(true); // Output: "Invalid input: true"
```

inside the function we just console type of our generic `T`. for this we give two input of the function. then when we see the output it's really say the type of our input param.

### 4. What is the difference between an "unknown" and "any" type in TypeScript?

unknown means we don't know right now the type of the variable but after declare it then we know the type also once the variable is declared we can't change the type.
for example: we initialize the variable value: `hi` it is a `string` type so next time we must need to provide `string` type value only.

where, any means: we can change is value whatever we want some time `string` sometime `boolean` etc. don't give any error.

### 5. Can you give an example of how to use enums in TypeScript?

```typescript
// Define an enum named "Color" with a set of named constants
enum Color {
  Red,
  Green,
  Blue,
}

// Use the enum constants in your code
const favoriteColor: Color = Color.Blue;
console.log(favoriteColor); // Output: 2
```

### 6. What is the "as" keyword used for in TypeScript?

it is use for: Type Assertion, Type Casting.

### 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

The "in" operator is used to check if a property exists in an object. where, The "typeof" operator is used to check the type of a variable


## Optional Questions:

### 1. Can you explain what a "tuple" is in TypeScript?
is is spacial type of array. where array element is fixed type. if the fist element is number and 2nd element is string it always like this. never will be number, string type. it always number, string type. 
example:

```typescript
const info:[number,string] = [1, 'Rana']
```
### 2. Can you give an example of how to use "readonly" properties in TypeScript?
when we use this we can't modify once it's declare. 

see the example: 
```typescript
type obj = {
    readonly id: number,
    name: string
}
let info:obj = {
    id: 3,
    name: 'Rana'
}
console.log(info.id)
console.log(info.name)

// info.id = 2 //we can't change because it's read only property. 
info.name = 'Masud'
console.log(info.id)
console.log(info.name)
```

### 3. Can you give an example of how to use "conditional types" in TypeScript?

``` typescript
type myType<T> = T extends string ? string : T extends number ? number : null;

interface Person {
    name:string;
    age:myType<string>;
}

const myObj:Person = {
    name:'Rana',
    age:'45'
}
console.log(myObj.name)
console.log(myObj.age)
```