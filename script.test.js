const { titleCase, Pet } = require("./script");

describe("input to name clean", () => {
  test("capitalises the first letter only", () => {
    expect(titleCase("groot")).toEqual("Groot");
  });
});

describe("Testing grow Up method on Pet constructor", () => {
  // set newPet as instance for testing
  const newPet = new Pet("test groot");
  // set oldPet as instance for testing
  const oldPet = new Pet("old groot");
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
  const newPet = new Pet("test groot");
  newPet.walk();
  const oldPet = new Pet("old groot");
  oldPet.fitness = 2;
  oldPet.walk();

  test("fitness greater than 7", () => {
    expect(newPet.fitness).toBe(10);
  });
  test("fitness is less than 7", () => {
    expect(oldPet.fitness).toBe(6);
  });
});

describe("testing feed method on Pet constructor", () => {
  const newPet = new Pet("test groot");
  newPet.feed();
  let oldPet = new Pet("old groot");
  oldPet.hunger = 7;
  oldPet.feed();

  test("hunger decrease the Pet's hunger level by 3", () => {
    expect(oldPet.hunger).toBe(4);
  });

  test("hunger does not go below 0", () => {
    expect(newPet.hunger).toBe(0);
  });
});

describe("give the Pet function a checkUp method that lets you know how the pet is feeling", () => {
  const newPet = new Pet("test groot");

  test("if pet's fitness is 3 or less, return 'I need a walk'", () => {
    newPet.fitness = 2;
    expect(newPet.checkUp()).toBe("I need a walk");
  });

  test("if pet's hunger is 5 or more, return 'I am hungry'", () => {
    newPet.fitness = 6;
    newPet.hunger = 7;
    expect(newPet.checkUp()).toBe("I am hungry");
  });

  test("if pet's hunger is 5 or more, if pet's fitness is 3 or less: 'I am hungry AND I need a walk'", () => {
    newPet.fitness = 3;
    newPet.hunger = 5;
    expect(newPet.checkUp()).toBe("I am hungry AND I need a walk");
  });

  test("if pet's hunger is less than 5, if pet's fitness is 4 or more:'I feel great!' ", () => {
    newPet.fitness = 4;
    newPet.hunger = 3;
    expect(newPet.checkUp()).toBe("I feel great!");
  });
});

describe("Guard Clauses to check if pet is still alive using deathCheck()", () => {
  const newPet = new Pet("test groot");
  const oldPet = new Pet("old groot");

  test("pet is alive when object first created", () => {
    expect(newPet.isAlive).toBe(true);
  });
  test("pet is dead when fitness = 0", () => {
    newPet.fitness = 0;
    newPet.deathCheck();
    expect(newPet.isAlive).toBe(false);
  });

  test("pet is dead when hunger >= 10", () => {
    newPet.hunger = 10;
    newPet.deathCheck();
    expect(newPet.isAlive).toBe(false);
  });

  test("pet is adult when age > 30", () => {
    oldPet.age = 30;
    oldPet.deathCheck();
    expect(oldPet.isAdult).toBe(true);
  });
});
