const caesarCipher = function (text, offset = 1) {
  if (typeof text !== 'string') return null;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (offset < -26 || offset > 26) offset = offset % 26;
  if (offset < 0) offset = 26 + offset;

  return text

    .split('')
    .map((char) => {
      let index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) return char;

      let newIndex = index + offset;
      newIndex = newIndex > 25 || newIndex < 0 ? newIndex % 26 : index + offset;
      char = alphabet[newIndex];
      return char;
    })
    .join('');
};

export default caesarCipher;
