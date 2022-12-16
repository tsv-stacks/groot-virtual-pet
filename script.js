let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.isAlive = true;
    this.isAdult = false;
  }
  deathCheck() {
    if (this.fitness === 0) {
      console.log("pet died due to poor health");
      return (this.isAlive = false);
    } else if (this.hunger >= 10) {
      console.log("pet died due to starvation");
      return (this.isAlive = false);
    } else if (this.age >= 30) {
      this.isAdult = true;
      return console.log("adult groot");
    }
    return this.checkUp();
  }
  growUp() {
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  }
  walk() {
    if (this.fitness >= 7) {
      this.fitness = 10;
    } else {
      this.fitness += 4;
    }
  }
  feed() {
    if (this.hunger <= 3) {
      this.hunger = 0;
    } else {
      this.hunger -= 3;
    }
  }
  checkUp() {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3 && this.hunger <= 4) {
      return "I need a walk";
    } else if (this.hunger >= 5 && this.fitness > 3) {
      return "I am hungry";
    }
    return "I feel great!";
  }
}

const testGroot = new Pet("groot");

const death = () => {
  return "death";
};

const adultGroot = () => {
  return "game win";
};

const gameOver = () => {
  return "game over";
};

const nameGen = () => {
  let testText = inputText.value.trim();
  if (testText === "") {
    return alert(
      "Please type your name to get started with your very own virtual Baby Groot Pet!"
    );
  } else {
    play();
    testText = titleCase(testText);
    greetText.innerText = `Hello ${testText}\n I am Groot!`;
    document.getElementById("modal-add-name").classList.add("fade-out");
    greetText.classList.add("fade-in");
    return console.log("name recieved");
  }
};
//converts name to Case
const titleCase = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

//plays I am groot
const play = () => {
  let audio = document.getElementById("audio");
  audio.play();
};

module.exports = {
  testEnvironment: "jsdom",
  titleCase,
  Pet,
};
