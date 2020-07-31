function formatString(string, maxLength = 40) {
  // Write code under this line

  return string.length > maxLength
    ? string.slice(0, maxLength) + '...'
    : string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

// Return(string.length > 40) ? String.slice(0, 40) + ‘...’: string;
