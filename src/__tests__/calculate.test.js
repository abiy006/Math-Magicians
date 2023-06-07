import calculate from '../logic/calculate';

describe('Testing calculate.js file', () => {
  it('test_resetting_calculator', () => {
    const obj = {
      total: '123',
      next: '456',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('test_entering_number', () => {
    const obj = {
      total: '123',
      next: '456',
      operation: '+',
    };
    const buttonName = '7';
    const expected = {
      total: '123',
      next: '4567',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('test_divide_by_zero', () => {
    const obj = {
      total: '10',
      next: '0',
      operation: '÷',
    };
    const buttonName = '=';
    const expected = {
      total: "Can't divide by 0.",
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  it('test_pressing_operation', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '-';
    const expected = {
      total: '15',
      next: null,
      operation: '-',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });
});
