const { titleCase, Pet } = require("./script");

describe("input to name clean", () => {
  test("capitalises the first letter only", () => {
    expect(titleCase("groot")).toEqual("Groot");
  });
});

describe("Testing methods on Pet constructor", () => {
  // set newPet as instance for testing
  let newPet = new Pet("test groot");
  test("Initial age is set to 0", () => {
    expect(newPet.age).toBe(0);
  });

  test("growUp() adds 1 to age", () => {
    expect(newPet.growUp()).toEqual(expect(newPet.age).toBe(1));
  });
});
