// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
type dontKnow=unknown;
const desideWhatWillPrint = (val:dontKnow)=>{
    if (typeof val === 'string' ) {
        console.log(val)
    } else {
        console.error('Provide String Value.')
    }
}
desideWhatWillPrint('3')