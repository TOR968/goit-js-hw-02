function reduceArray(array) {
  let total = 0;
  // Write code under this line
  //   for (const item of array) {
  //     total += item;
  //   }
  for (i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
