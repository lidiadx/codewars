const counter = require("./count_XOs.js");

describe("Count simple", function () {
  test("says true", function () {
    expect(counter("xo")).toEqual(true);
  });

  test("Case insensitive", function () {
    expect(counter("xxOo")).toEqual(true);
  });

  test("Mixed input", function () {
    expect(counter("xxxm")).toEqual(false);
  });

  test("Only Os", function () {
    expect(counter("Oo")).toEqual(false);
  });

  test("Mixture with Os", function () {
    expect(counter("ooom")).toEqual(false);
  });
});
