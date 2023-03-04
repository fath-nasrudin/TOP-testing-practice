const calculator = {
  checkIsAllNumber(...args) {
    let isAllNumber = true;
    args.forEach((arg) => {
      if (typeof arg !== 'number') isAllNumber = false;
    });
    return isAllNumber;
  },
  add(num1, num2) {
    if (!this.checkIsAllNumber(num1, num2)) {
      return null;
    }
    return num1 + num2;
  },

  subtract(num1, num2) {
    if (!this.checkIsAllNumber(num1, num2)) return null;
    return num1 - num2;
  },

  divide(num1, num2) {
    if (!this.checkIsAllNumber(num1, num2) || num2 === 0) return null;
    return num1 / num2;
  },
  multiply(num1, num2) {
    if (!this.checkIsAllNumber(num1, num2)) return null;
    return num1 * num2;
  },
};

export default calculator;
