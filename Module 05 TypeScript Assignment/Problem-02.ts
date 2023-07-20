// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18

type objType = {
    name: string;
    age: number;
  };
  const objArrey: objType[] = [
    { name: "Rana", age: 26 },
    { name: "Masud", age: 2 },
    { name: "XYZ", age: 46 },
  ];
  const above18 = (arr:objType[]):objType[] =>{
      let outputArr:objType[]=[]
      for (const i of arr) {
          if (i.age >= 18) {
              outputArr.push(i)
          }
      }
      return outputArr;
  }
  console.log(above18(objArrey))
  