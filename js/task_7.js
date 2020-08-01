function filterArray(array) {
  const numbers = [];
  // let result = '';
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line

    const typeArr = typeof array[i];
    if (typeArr === 'number' && typeArr !== 'NaN' && typeArr !== 'Infinity') {
      const onlyNumber = array[i];
      console.log(onlyNumber);
    }

    // if (typeArr.includes('number')) {
    //   console.log(array[i]);
    // }

    // console.log(array[i]);
    // console.log(typeof array[i]);
    // === 'number'
    // ? console.log(array)
    // : console.log(``);
  }
  // return result;
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
