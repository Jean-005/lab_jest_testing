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

  test('can add two large positive numbers', () => { 
    expected = 270;
    actual = sum(120, 150);
    expect(actual).toBe(expected); 
  });

  test('can add two negative numbers', () => {
    expected = -22;
    actual = sum(-12, -10);
    expect(actual).toBe(expected); 
  });

  test('can add zero', () => {
    expected = 200;
    actual = sum(200, 0);
    expect(actual).toBe(expected); 
    
  });
  
});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 2;
    actual = subtract(4, 2);
    expect(actual).toBe(expected); 
  });

  test('can subtract two large positive numbers', () => {
    expected = 300;
    actual = subtract(500, 200);
    expect(actual).toBe(expected); 
 });

 test('can add zero', () => {
  expected = 200;
  actual = subtract(200, 0);
   expect(actual).toBe(expected); 

 });

});


describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 24;
    actual = multiply(4, 6);
    expect(actual).toBe(expected); 
  });

  test('can multiply two large positive numbers', () => {
    expected = 3000;
    actual =  multiply(50, 60);
    expect(actual).toBe(expected); 
 });

 test('can multiply by zero', () => {
  expected = 0;
  actual = multiply(100, 0);
   expect(actual).toBe(expected); 

 });
 
});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
