const reverseString = (text) => {
  if (typeof text !== 'string') return -1;
  return text.split('').reverse().join('');
};

console.log(reverseString(undefined));

export default reverseString;
