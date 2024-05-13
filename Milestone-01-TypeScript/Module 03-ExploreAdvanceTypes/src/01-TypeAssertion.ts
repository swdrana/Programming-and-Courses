let someValue: any = "this is a string";

// Using angle-bracket syntax: Not Recommended?!
let strLength: number = (<string>someValue).length; 


// Using as syntax:            Recommended?!
let strLength2: number = (someValue as string).length;