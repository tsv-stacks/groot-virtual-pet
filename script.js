let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");

function Pet(name) {
  this.name = name;
  this.age = 0;
}

Pet.prototype.growUp = function () {
  this.age++;
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
};
