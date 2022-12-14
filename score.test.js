const score = require("./score");

test("score", () => {
  const result = score(10);

  expect(result).toBe(10);

  expect(result).not.toBe(0);

  expect(result).toBeLessThan(100);

  expect(result).toBeGreaterThan(0);
});
