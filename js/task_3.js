function findLongestWord(string = '') {
  // Write code under this line
  let longWord = '';
  let word = '';
  for (let i = 0; i < string.split(' ').length; i += 1) {
    if (string.split(' ')[i].length > longWord) {
      longWord = string.split(' ')[i].length;
      word = string.split(' ')[i];
    }
  }
  return word;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
