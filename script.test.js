const { titleCase, Pet } = require("./script");

describe("input to name clean", () => {
  test("capitalises the first letter only", () => {
    expect(titleCase("groot")).toEqual("Groot");
  });
});

describe("Testing grow Up method on Pet constructor", () => {
  // set newPet as instance for testing
  let newPet = new Pet("test groot");
  // set oldPet as instance for testing
  let oldPet = new Pet("old groot");
  oldPet.growUp();
  oldPet.growUp();
  test("Initial age is set to 0", () => {
    expect(newPet.age).toBe(0);
  });

  test("growUp() adds 1 to age: after function has run twice", () => {
    expect(oldPet.age).toBe(2);
  });

  test("Initial hunger is set to 0", () => {
    expect(newPet.hunger).toBe(0);
  });

  test("Initial fitness is set to 10", () => {
    expect(newPet.fitness).toBe(10);
  });

  test("Initial fitness is set to 10: after function has run twice", () => {
    expect(oldPet.fitness).toBe(4);
  });

  test("growUp() adds 1 to age", () => {
    expect(oldPet.age).toBe(2);
  });

  test("growUp() adds 5 to hunger", () => {
    expect(oldPet.hunger).toBe(10);
  });

  test("growUp() adds 5 to hunger: after function has run twice", () => {
    expect(oldPet.hunger % 5).toBe(0);
  });
});

describe("Testing walk method on Pet constructor", () => {
  let newPet = new Pet("test groot");
  newPet.walk();
  let oldPet = new Pet("old groot");
  oldPet.fitness = 2;
  oldPet.walk();

  test("fitness greater than 7", () => {
    expect(newPet.fitness).toBe(10);
  });
  test("fitness is less than 7", () => {
    expect(oldPet.fitness).toBe(6);
  });
});
