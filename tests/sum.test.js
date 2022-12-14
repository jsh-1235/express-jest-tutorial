// const { sum } = require("./sum");
const sum = require("../lib/sum");

test("sum", () => {
  const result = sum([1, 2, 3, 4, 5, 6]);

  expect(result).toBe(21);
});
