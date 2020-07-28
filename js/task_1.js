const getItemsString = function (array) {
  // Write code under this line

  for (let i = 0; i < array.length; i += 1) {
    const itemsArray = array[i];
    const numberItems = `${i + 1} -`;
    const result = `${numberItems} ${itemsArray}`;
    console.log(result);
  }
  // return getItemsString;
  // for (let i = 1; i <= array.length; i += 1) {
  //   const numberItems = `${i} - `;
  //   console.log(numberItems);
  // }
  // const result = `${numberItems} ${itemsArray}\n`;
  //
};

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
