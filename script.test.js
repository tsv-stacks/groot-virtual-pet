const { titleCase } = require("./script");

describe("input to name clean", () => {
  test("capitalises the first letter only", () => {
    expect(titleCase("groot")).toEqual("Groot");
  });

  test("removes whitespace", () => {
    expect(titleCase(" groot ")).toEqual("Groot");
  });
});
