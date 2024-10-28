export function whatsMyType(argument: any) {
  return argument;
}

export function genericMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType("Hola Mundo");
const amINumber = whatsMyType(100);
const amIArray = whatsMyType([1, 2, 3, 4, 5]);

let amIStringG = genericMyType("Hola Mundo");
let amINumberG = genericMyType(100);
let amIArrayG = genericMyType([1, 2, 3, 4, 5]);
//Para forzar a que se envie el parámetro del un tipo especifico y retorne un tipo especifico coloca asi:
//let amIStringG=genericMyType<string>("Hola Mundo");

console.log(amIString.split());
console.log(amIString.split(" "));
console.log(amINumber);
console.log(amIArray);
//console.log(amIString.split2(" "));

console.log(amIStringG);
console.log(amINumberG);
console.log(amIArrayG);

console.log(amIStringG.split(" "));
console.log(amINumberG.toFixed());
console.log(amIArrayG.join("-"));
