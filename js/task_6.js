function mapArray(array) {
  const numbers = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
      let mn = array[i] * 10;
      
    console.log(mn);
    // return array;
  }
  return numbers;
  // return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
