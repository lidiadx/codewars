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

});
