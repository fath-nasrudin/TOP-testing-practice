const analyzeArray = function (arrOfNums) {
  if (!Array.isArray(arrOfNums) || arrOfNums.length === 0) return null;

  const length = arrOfNums.length;
  const sum = arrOfNums.reduce((acc, currentValue) => acc + currentValue);
  const average = sum / length;
  const min = Math.min(...arrOfNums);
  const max = Math.max(...arrOfNums);

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
