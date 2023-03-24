const comp = require('./same_array');

describe('Same Array', function() {
  test('Passes initial array', function() {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect(comp(a1, a2)).toEqual(true);
  });

  test('Does not pass changed initial array', function() {
    let a1 = [155, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    expect(comp(a1, a2)).toEqual(false);
  });

  test('Returns true if both are []', function() {
    expect(comp([], [])).toEqual(true);
  });

  test('Random array input', function() {
    let a1 = [2, 9, 4, 0, 3, 3, 8, 10, 6, 7];
    let a2 = [0, 81, 36, 9, 64, 49, 16, 9, 4, 100];
    expect(comp(a1, a2)).toEqual(true);
  });

});
