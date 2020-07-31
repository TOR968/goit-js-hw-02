function checkForSpam(str) {
  // Write code under this line
  const wordLower = str.toLowerCase();
  return wordLower.includes('sale') || wordLower.includes('spam');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
