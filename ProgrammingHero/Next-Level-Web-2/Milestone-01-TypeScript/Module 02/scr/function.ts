// Normal Function
function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add(2, 5);

// Arrow Function
//    fn_name = (param:type  , param:type  ): return_type => fn_body
const welcome = (fName: string, lName: string): string =>
  `Welcome ${fName} ${lName}`;
console.log(welcome("Masud", "Rana"));

// callback function
const makeSquire = [1, 2, 4];
const newArr = makeSquire.map((item: number) => item * item);

// When a function use inside a object it's called Method.
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Rana",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
