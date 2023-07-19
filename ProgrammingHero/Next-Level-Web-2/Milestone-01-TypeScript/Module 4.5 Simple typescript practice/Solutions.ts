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
// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.


type productType = [string, number, number];
type productTypeTupleArray = productType[];
const pro1: productType = ["Mobile", 4000, 20];
const pro2: productType = ["Laptop", 6000, 10];
const pro3: productType = ["Headphone", 300, 50];
const pro4: productType = ["Charger", 400, 90];
const tuppleArray: productTypeTupleArray = [pro1, pro2, pro3, pro4];

const totalPrice = (myPro: productType[]): void => {
  let totalCost = 0;
  const a =myPro.map((product)=>{
    const [productName, price, quantity] = product;
    totalCost += price * quantity;
  })
  // console.log(totalCost)
};
totalPrice(tuppleArray);

// i've done but can't implement generic function. here is the chat GPT and of the prob 4.


// type ProductType<T extends number> = [string, number, T];
// type ProductTypeTupleArray<T extends number> = ProductType<T>[];

// const pro1: ProductType<20> = ["Mobile", 4000, 20];
// const pro2: ProductType<10> = ["Laptop", 6000, 10];
// const pro3: ProductType<50> = ["Headphone", 300, 50];
// const pro4: ProductType<90> = ["Charger", 400, 90];
// const tuppleArray: ProductTypeTupleArray<number> = [pro1, pro2, pro3, pro4];

// const totalPrice = <T extends number>(myPro: ProductTypeTupleArray<T>): void => {
//   let totalCost = 0;
//   myPro.forEach((product) => {
//     const [, price, quantity] = product;
//     totalCost += price * quantity;
//   });
//   console.log(totalCost);
// };

// totalPrice(tuppleArray);


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
// console.log(findPersoneUsingEmail(personInArrey,'swdrana@hotmail.com'))
// ===================== Problem NO 7 ===================== //
const num: number[] = [1,2,3,4,5]
function findMinMax (...num: number[]) {
  if(num.length===0){
    console.log('No Number Found')
  }
  let min:number = num[0]
  let max:number = num[0]
  num.map(n=>{
    if(n>=max){
      max = n
    }
    if(n<min){
      min = n
    }
  })
  return [min, max]
}
const [minimum, maximum]=findMinMax(...num)
console.log('minimum:' ,minimum, '\nMaximum:', maximum)
// ===================== Problem NO 8 ===================== //
