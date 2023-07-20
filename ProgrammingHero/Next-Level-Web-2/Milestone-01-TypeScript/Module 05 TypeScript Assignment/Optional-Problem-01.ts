// Array and Tuple types
// Create a TypeScript program that declares an array of strings and a tuple of a number and a string. Add elements to both data structures, and log them to the console.

let array:string[] = ['Masud', 'Rana'];
let tuple:[string, number] = ['Rana',26]


console.log(array)
console.log(tuple)
console.log('=========== Before & After =========')

array.push('New Data');

tuple[0]='Masud'
tuple[1]=22

console.log(array)
console.log(tuple)
