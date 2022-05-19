const myNumbers = [32, 32, 6, 47, 48, 32, 13, 20, 16, 23];

let product = (array) => {
  let product = 1;
  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

console.log(product(myNumbers));

// let product = 1;
// for (i = 0; i < myNumbers.length; i++) {
//   product *= myNumbers[i];
// }

// console.log(product);
