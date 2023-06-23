// Problem NO 1
const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];
console.log(userInfo)

// Problem NO 2
/**
 * Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
 */
type NumberArrayType = number[]
function findSmiler(arr1:NumberArrayType, arr2:NumberArrayType):NumberArrayType{
    const newArray:NumberArrayType=[]
    for(const num of arr1){
        if (arr2.includes(num)){
            newArray.push(num)
        }
    }
    return newArray;
}
const fArray:NumberArrayType = [1, 2, 3, 4, 5];
const sArray:NumberArrayType = [2, 4, 6, 8];
console.log(findSmiler(fArray, sArray))