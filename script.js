let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
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
}

const testGroot = new Pet("groot");

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
