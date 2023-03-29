function XO(str) {
  let arr = Array.from(str);
  arr = arr.map((value) => value.toLowerCase());
  const result = arr.reduce(
    (acc, value) => {
      if (value === "o") acc[0] += 1;
      if (value === "x") acc[1] += 1;
      return acc;
    },
    [0, 0]
  );
  return result[0] === result[1];
}

module.exports = XO;
