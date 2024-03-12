const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    expected = 270;
    actual = sum(120, 150);
    expect(actual).toBe(expected); 
  });

  test.skip('can add two negative numbers', () => {
    expected = -22;
    actual = sum(-12, -10);
    expect(actual).toBe(expected); 
  });

  test.skip('can add zero', () => {
    expected = 200;
    actual = sum(200, 0);
    expect(actual).toBe(expected); 
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
