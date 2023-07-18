// ===================== Problem NO 1 ===================== //
const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];
// console.log(userInfo);

// ===================== Problem NO 2 ===================== //
type NumberArrayType = number[];
function findSmiler(
  arr1: NumberArrayType,
  arr2: NumberArrayType
): NumberArrayType {
  const newArray: NumberArrayType = [];
  for (const num of arr1) {
    if (arr2.includes(num)) {
      newArray.push(num);
    }
  }
  return newArray;
}
const fArray: NumberArrayType = [1, 2, 3, 4, 5];
const sArray: NumberArrayType = [2, 4, 6, 8];
// console.log(findSmiler(fArray, sArray));

// ===================== Problem NO 3 ===================== //
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const productArray = [
  { id: 1, name: "Product A", price: 10, category: "Category 1" },
  { id: 2, name: "Product B", price: 20, category: "Category 2" },
  { id: 3, name: "Product C", price: 30, category: "Category 1" },
];

const filterWithCriterion = <T extends keyof Product>(
  productArr: Product[],
  key: T,
  value: Product[T]
): Product[] => {
  return productArr.filter((item) => {
    // console.log(value)
    return item[key] === value;
  });
};

const filterProduct = filterWithCriterion(
  productArray,
  "category",
  "Category 1"
);
// console.log(filterProduct);

// ===================== Problem NO 4 ===================== //
type productType = [string, number, number];
type productTypeTupleArray = productType[];
const pro1: productType = ["Mobile", 4000, 20];
const pro2: productType = ["Laptop", 6000, 10];
const pro3: productType = ["Headphone", 300, 50];
const pro4: productType = ["Charger", 400, 90];
const tuppleArray: productTypeTupleArray = [pro1, pro2, pro3, pro4];

const totalPrice = <T>(myPro: T[]): void => {
  let totalCost = 0;
};
// totalPrice<productType>(tuppleArray);

// ===================== Problem NO 5 ===================== //
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum: number = 0;
arr.map((item) => {
  if (item % 2 == 0) {
    sum += item;
  }
});
// console.log(sum)
// ===================== Problem NO 6 ===================== //
interface Person {
  name: string;
  age: number;
  email: string;
}
const personInArrey: Person[] = [
  { name: "Rana", age: 26, email: "swdrana@hotmail.com" },
  { name: "John", age: 30, email: "john@example.com" },
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 28, email: "bob@example.com" },
];
const findPersoneUsingEmail:(list:Person[], str:string)=>Person | null = (list,str)=>{
  let a : Person | undefined;

// here i use map function but find is best for this case
  list.map(p=>{
    if(p.email === str){
      // console.log(str)
      // console.log(p)
      a = p
    }
  })
  if(typeof a !== 'undefined'){
    // console.log(a)
    return a;
  } else{
    return null;
  }
}
console.log(findPersoneUsingEmail(personInArrey,'swdrana@hotmail.com'))
// ===================== Problem NO 7 ===================== //

// ===================== Problem NO 8 ===================== //
