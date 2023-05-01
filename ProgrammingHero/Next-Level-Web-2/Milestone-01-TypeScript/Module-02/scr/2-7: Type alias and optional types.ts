//object type alias
type UserInfo = {
  name: string;
  email: string;
  address?: string;
  age?: number;
  phone: number;
};
const user1: UserInfo = {
  name: "Rana",
  email: "xxx@yyy.zzz",
  address: "BD",
  age: 25,
  phone: 1190,
};
const user2: UserInfo = {
  name: "Masud",
  email: "mmm@nnn.zzz",
  phone: 190,
};



// function type alias
type OperationType = (x: number, y: number) => number;
const calculate = (num1: number, num2: number, operation: OperationType) => {
  console.log(operation(num1,num2))
  return operation(num1, num2);
};
calculate(1, 2, (a, b) => a + b);
calculate(1, 2, (a, b) => a - b);
calculate(1, 2, (a, b) => a * b);
