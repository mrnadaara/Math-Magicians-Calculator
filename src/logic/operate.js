import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  switch (operation) {
    case '+':
      return bigNumberOne.plus(bigNumberTwo).toString();
    case '-':
      return bigNumberOne.minus(bigNumberTwo).toString();
    case '÷':
      return bigNumberOne.div(bigNumberTwo).toString();
    case 'x':
      return bigNumberOne.mul(bigNumberTwo).toString();
    case '%':
      return bigNumberOne.mod(bigNumberTwo).toString();
    default:
      return 0;
  }
};

export default operate;
