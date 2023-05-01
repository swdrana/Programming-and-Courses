// can't use default parameter at first element or parameter.
function add2(num1: number, num2: number = 10): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add2(5);

// Destructuring
const myFriend = ["a", "b", "c"];
const newFriend = ["d", "e", "f"];

myFriend.push(...newFriend);
console.log(myFriend);

// rest (it's !destructuring) [we can called it's dynamic parameter]
const addNum = (...nums: number[]): void => {
  nums.forEach((num,index)=>console.log(`nums[${index}] = ${num}`))
};
addNum(1, 2, 4, 5);


//alias
const bestFriend = {
    fullName : 'Book',
    age:1
}
const {fullName:string} = bestFriend; //here string is not type it's alias.
console.log(string)
console.log({string})