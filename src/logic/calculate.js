import Operate from './operate';

const calculate = (calculator, buttonName) => {
  let calcObj = { ...calculator };
  const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operator = ['x', '-', '%', '÷', '+'];
  if (number.includes(buttonName)) {
    if (!calcObj.total) {
      calcObj.total = buttonName;
    } else if (/\.$/g.test(calcObj.next)) {
      calcObj.next += buttonName;
    } else if (calcObj.total && calcObj.operation) {
      calcObj.next = buttonName;
    } else if (/\.$/g.test(calcObj.total)) {
      calcObj.total += buttonName;
    } else {
      calcObj.total = buttonName;
    }
  } else if (buttonName === '+/-') {
    if (calcObj.total) {
      calcObj.total = Operate(calcObj.total, '-1', 'x');
    }
    if (calcObj.next) {
      calcObj.next = Operate(calcObj.next, '-1', 'x');
    }
  } else if (buttonName === '.') {
    if (calcObj.total && !/\.+/g.test(calcObj.total)) {
      calcObj.total += '.';
    } else if (calcObj.next && !/\.+/g.test(calcObj.next)) {
      calcObj.next += '.';
    }
  } else if (buttonName === 'AC') {
    calcObj = { total: null, next: null, operation: null };
  } else if (operator.includes(buttonName)) {
    if (calcObj.total) {
      calcObj.operation = buttonName;
    }
  } else if (buttonName === '=') {
    if (calcObj.total && calcObj.next) {
      calcObj.total = Operate(calcObj.total, calcObj.next, calcObj.operation);
      calcObj.next = null;
      calcObj.operation = null;
    }
  }

  return calcObj;
};

export default calculate;
