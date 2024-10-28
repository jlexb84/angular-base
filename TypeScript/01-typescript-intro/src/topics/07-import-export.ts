import { Product, taxCalculation } from "./06-02-function-destructuring.ts";

const shoppingCart: Product[] = [
  { description: "Nokia", price: 100.0 },
  { description: "iPad", price: 150.0 },
];

const tax = 0.15;
const [total, taxTotal] = taxCalculation({
  tax: tax,
  products: shoppingCart,
});

console.log("Total: ", total);
console.log("Tax: ", taxTotal);
