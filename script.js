let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");
const nameForm = document.getElementById("add-name-form");
let userPet = {};
let sideNav = document.getElementById("mySidenav");
let fitMeter = document.getElementById("health-meter");
let ageMeter = document.getElementById("age-meter");
let hungerMeter = document.getElementById("hunger-meter");
let petStatus = document.getElementById("pet-text");
let gameContainer = document.getElementById("game-container");

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.isAlive = true;
    this.isAdult = false;
    this.isHappy = true;
  }
  deathCheck() {
    if (this.fitness <= 0) {
      console.log("pet died due to poor health");
      petStatus.textContent = "Baby Groot died due to poor health :(";
      death();
      return (this.isAlive = false);
    } else if (this.hunger >= 10) {
      console.log("pet died due to starvation");
      petStatus.textContent = "Baby Groot died due to starvation :(";
      death();
      return (this.isAlive = false);
    } else if (this.age >= 15) {
      play();
      this.isAdult = true;
      return adultGroot();
    } else {
      return this.checkUp();
    }
  }
  isSad() {
    document.getElementById("smile").classList.add("sad");
    return (this.isHappy = false);
  }
  happy() {
    document.getElementById("smile").classList.remove("sad");
    return (this.isHappy = true);
  }
  growUp() {
    if (userPet.isAlive === false || userPet.isAdult === true) {
      return "Game Over";
    } else {
      play();
      this.age++;
      this.hunger += 4;
      this.fitness -= 3;
      progressUpdate(this.age, this.hunger, this.fitness);
      this.deathCheck();
    }
  }
  walk() {
    if (userPet.isAlive === false || userPet.isAdult === true) {
      return "Game Over";
    } else {
      if (this.fitness >= 7) {
        this.fitness = 10;
        progressUpdate(this.age, this.hunger, this.fitness);
      } else {
        this.fitness += 4;
        progressUpdate(this.age, this.hunger, this.fitness);
        this.deathCheck();
      }
    }
  }
  feed() {
    if (userPet.isAlive === false || userPet.isAdult === true) {
      return "Game Over";
    } else {
      if (this.hunger <= 3) {
        this.hunger = 0;
        progressUpdate(this.age, this.hunger, this.fitness);
      } else {
        this.hunger -= 3;
        progressUpdate(this.age, this.hunger, this.fitness);
        this.deathCheck();
      }
    }
  }
  checkUp() {
    if (this.fitness <= 3 && this.hunger >= 5) {
      this.isSad();
      petStatus.textContent = "I am hungry AND I need a walk!";
      return "I am hungry AND I need a walk";
    } else if (this.fitness <= 3 && this.hunger <= 4) {
      this.isSad();
      petStatus.textContent = "I need a walk!";
      return "I need a walk";
    } else if (this.hunger >= 5 && this.fitness > 3) {
      this.isSad();
      petStatus.textContent = "I am hungry!";
      return "I am hungry";
    } else {
      this.happy();
      petStatus.textContent = "I feel great!";
      return "I feel great!";
    }
  }
}

function progressUpdate(newAge, newHunger, newFitness) {
  console.log(
    "age = " + newAge + ", hunger = " + newHunger + ", fitness = " + newFitness
  );
  ageMeter.value = newAge;
  hungerMeter.value = newHunger;
  fitMeter.value = newFitness;
}

// delete - for testing game & endgame
// userPet = new Pet("groot");

const death = () => {
  document.getElementById("death-trigger").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("death-trigger").style.display = "none";
    document.getElementById("loser").style.display = "flex";
    document.getElementById("loser").classList.add("fade-in");
    gameContainer.style.display = "none";
  }, 2000);
  return "death";
};

const adultGroot = () => {
  play();
  document.getElementById("death-trigger").classList.add("fade-out");
  setTimeout(function () {
    document.getElementById("death-trigger").style.display = "none";
    document.getElementById("winner").style.display = "flex";
    document.getElementById("winner").classList.add("fade-in");
    gameContainer.style.display = "none";
    petStatus.innerText =
      "WE ARE GROOT!\n\n You helped Baby Groot survive. \n\nThanks for playing!";
  }, 2000);
  return "game win";
};

const nameGen = () => {
  let testText = inputText.value.trim();
  if (testText === "") {
    return alert(
      "Please type your name to get started with your very own virtual Baby Groot Pet!"
    );
  } else {
    play();
    console.log("name recieved");
    testText = titleCase(testText);
    greetText.innerText = `Hello ${testText}\n I am Groot!`;
    document.getElementById("modal-add-name").classList.add("fade-out");
    greetText.classList.add("fade-in");
    setTimeout(function () {
      nameForm.style.display = "none";
      gameContainer.style.display = "block";
      gameContainer.classList.add("fade-in");
    }, 2000);
    userPet = new Pet(testText);
    console.log(userPet);
    return userPet;
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

function openNav() {
  if (sideNav.style.width === "250px") {
    closeNav();
  } else {
    sideNav.style.width = "250px";
    sideNav.style.padding = "40px 5px 0px 5px";
  }
}

window.onclick = function (event) {
  if (event.target == sideNav) {
    closeNav();
  }
};

const closeNav = () => {
  sideNav.style.padding = "0";
  sideNav.style.width = "0";
};

module.exports = {
  testEnvironment: "jsdom",
  titleCase,
  Pet,
};
