let inputText = document.getElementById("input-name");
let greetText = document.getElementById("greeting");

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
    return console.log("name recieved");
  }
};

function titleCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const play = () => {
  let audio = document.getElementById("audio");
  audio.play();
};
