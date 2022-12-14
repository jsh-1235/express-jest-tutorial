const { isEmail } = require("../lib/validation");

test("Successful", () => {
  expect(isEmail("jsh-1235@daum.net")).toEqual(true);
});

test("failure null", () => {
  expect(isEmail("")).toEqual(false);
});

test("failure format", () => {
  expect(isEmail("btjsh1235")).toEqual(false);
});
