let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");
const nameForm = document.getElementById("add-name-form");
let userPet = {};

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
    if (this.fitness === 0) {
      console.log("pet died due to poor health");
      return (this.isAlive = false);
    } else if (this.hunger >= 10) {
      console.log("pet died due to starvation");
      return (this.isAlive = false);
    } else if (this.age >= 30) {
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

// const testGroot = new Pet("groot");

const death = () => {
  document.getElementById("death-trigger").style.display = "none";
  return "death";
};

const adultGroot = () => {
  death();
  document.getElementById("winner").style.display = "block";
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
    setTimeout('nameForm.style.display = "none"', 2000);
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
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

module.exports = {
  testEnvironment: "jsdom",
  titleCase,
  Pet,
};
