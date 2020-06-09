/* eslint-disable quotes */
import Calculate from './calculate';

test('when passed null', () => {
  const calcObj = { total: null, next: null, operation: null };
  expect(Calculate(calcObj, '=')).toEqual(calcObj);
});

test('add only one decimal point for total prop', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, '.');
  const step3 = Calculate(step2, '2');
  const step4 = Calculate(step3, '.');
  expect(step4.total).toBe("2.2");
});

test('add only one decimal point for next prop', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, '.');
  const step3 = Calculate(step2, '2');
  const step4 = Calculate(step3, '+');
  const step5 = Calculate(step4, '5');
  const step6 = Calculate(step5, '.');
  const step7 = Calculate(step6, '5');
  const step8 = Calculate(step7, '.');
  const step9 = Calculate(step8, '=');
  expect(step8).toEqual({ total: "2.2", next: "5.5", operation: '+' });
  expect(step9.total).toBe("7.7");
});

test('should not mutate calc obj if decimal is first value passed', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '.');
  expect(step1).toEqual({ total: null, next: null, operation: null });
});

test('make number positive or negative with +/-', () => {
  const calcObj = { total: '-2', next: '4', operation: null };
  expect(Calculate(calcObj, '+/-')).toEqual({ total: "2", next: "-4", operation: null });
});

test('clear calc obj', () => {
  const calcObj = { total: '1', next: '8', operation: 'x' };
  expect(Calculate(calcObj, 'AC')).toEqual({ total: null, next: null, operation: null });
});

test('when passed 1 number', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, '=');
  expect(step2).toEqual({ total: "2", next: null, operation: null });
});

test('when passed 1 number but with no operator', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, '=');
  expect(step2).toEqual({ total: "2", next: null, operation: null });
  const step3 = Calculate(step2, '5');
  const step4 = Calculate(step3, '=');
  expect(step4).toEqual({ total: "5", next: null, operation: null });
});

test('when passed null with operator', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, 'x');
  const step2 = Calculate(step1, '=');
  expect(step2).toEqual(calcObj);
});

test('when passed two numbers with operator', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, 'x');
  const step3 = Calculate(step2, '2');
  const step4 = Calculate(step3, '=');
  expect(step4).toEqual({ total: "4", next: null, operation: null });
});

test('when passed total value and one number with operator', () => {
  const calcObj = { total: null, next: null, operation: null };
  const step1 = Calculate(calcObj, '2');
  const step2 = Calculate(step1, 'x');
  const step3 = Calculate(step2, '2');
  const step4 = Calculate(step3, '=');
  const step5 = Calculate(step4, 'x');
  const step6 = Calculate(step5, '2');
  const step7 = Calculate(step6, '=');
  expect(step7.total).toBe("8");
});
