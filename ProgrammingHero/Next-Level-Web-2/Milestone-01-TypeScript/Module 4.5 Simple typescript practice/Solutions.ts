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
    return item[key] === value;
  });
};

const filterProduct = filterWithCriterion(
  productArray,
  "category",
  "Category 1"
);
console.log(filterProduct);

// ===================== Problem NO 4 ===================== //
// ===================== Problem NO 5 ===================== //
// ===================== Problem NO 6 ===================== //
// ===================== Problem NO 7 ===================== //
// ===================== Problem NO 8 ===================== //
