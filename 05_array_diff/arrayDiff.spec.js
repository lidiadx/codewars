const arrayDiff = require('./arrayDiff.js');

describe('Array diffs', function() {
  test("a was [1,2], b was [1]", function() {
    let a = [1,2];
    let b = [1];
    expect(arrayDiff(a, b)).toEqual([2]);
  });

  test("a was [1,2,2], b was [1]", function() {
    let a = [1,2,2];
    let b = [1];
    expect(arrayDiff(a, b)).toEqual([2,2]);
  });

  test("a was [1,2,2], b was [2]", function() {
    let a = [1,2,2];
    let b = [2];
    expect(arrayDiff(a, b)).toEqual([1]);
  });

  test("a was [1,2,2], b was []", function() {
    let a = [1,2,2];
    let b = [];
    expect(arrayDiff(a, b)).toEqual([1,2,2]);
  });

  test("a was [], b was [1,2]", function() {
    let a = [];
    let b = [1,2];
    expect(arrayDiff(a, b)).toEqual([1,2]);
  });

  test("a was [1,2,3], b was [1,2]", function() {
    let a = [1,2,3];
    let b = [1,2];
    expect(arrayDiff(a, b)).toEqual([3]);
  });

});