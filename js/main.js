const maquina = ["paper", "scissors", "rock"];
const options = document.querySelectorAll(".option_bg");
const optionsSection = document.querySelector(".option");
const resultSection = document.querySelector(".option_result");
const scoreText = document.getElementById("score-txt");
const resultTxt = document.getElementById("result-txt");
const againBtn = document.getElementById("again");
const areaPlayer = document.getElementById("player");
const areaComputer = document.getElementById("computer");
const resultContainer = document.getElementById("result-container");
const resultWaiting = document.querySelector("computer_waiting");

let score = 0;
let tl = gsap.timeline({});
let winPlayer = false;
let winComputer = false;

const updateScore = () => {
  scoreText.innerHTML = score;
};

const updatePlayerSelection = (eleccionHumano, winner) => {
  if (winner) {
    areaPlayer.innerHTML = `
    <div class="option_bg disabled winner" id="${eleccionHumano}">
    <div class="option_bg_item">
      <img src="/images/icon-${eleccionHumano}.svg" alt="${eleccionHumano} icon" />
    </div>
    </div>`;
  } else {
    areaPlayer.innerHTML = `
    <div class="option_bg disabled " id="${eleccionHumano}">
    <div class="option_bg_item">
      <img src="/images/icon-${eleccionHumano}.svg" alt="${eleccionHumano} icon" />
    </div>
    </div>`;
  }
};

const updateComputerSelection = (eleccionMaquina, winner) => {
  if (winner) {
    areaComputer.innerHTML = `
        <div class="option_bg disabled winner" id="${eleccionMaquina}">
        <div class="option_bg_item">
          <img src="/images/icon-${eleccionMaquina}.svg" alt="${eleccionMaquina} icon" />
        </div>
        </div>`;
  } else {
    areaComputer.innerHTML = `
    <div class="option_bg disabled " id="${eleccionMaquina}">
    <div class="option_bg_item">
      <img src="/images/icon-${eleccionMaquina}.svg" alt="${eleccionMaquina} icon" />
    </div>
    </div>`;
  }
};

const computerGeneratorScore = () => {
  return maquina[Math.floor(Math.random() * maquina.length)];
};

const changeOptionArea = () => {
  optionsSection.classList.add("inactive");
  resultSection.classList.add("active");
};

const returnOptionArea = () => {
  optionsSection.classList.remove("inactive");
  resultSection.classList.remove("active");
};

const game = (playerSelection) => {
  let ComputerSelection = computerGeneratorScore();

  tl.from(areaComputer, { opacity: 0, duration: 2 })
    .from(
      resultContainer,
      {
        opacity: 0,
        y: 600,
      },
      "-=1"
    )
    .from(areaPlayer, { opacity: 0 }, "-=2");

  if (
    (playerSelection == "paper" && ComputerSelection == "rock") ||
    (playerSelection == "scissors" && ComputerSelection == "paper") ||
    (playerSelection == "rock" && ComputerSelection == "scissors")
  ) {
    winPlayer = true;
    resultTxt.innerHTML = "You Win";
    score++;
  } else if (playerSelection == ComputerSelection) {
    winComputer = false;
    winPlayer = false;
    resultTxt.innerHTML = "Draw";
  } else {
    winComputer = true;
    resultTxt.innerHTML = "You Loose";
    score--;
  }

  updatePlayerSelection(playerSelection, winPlayer);
  updateComputerSelection(ComputerSelection, winComputer);
  updateScore();
};

const optionSelected = () => {
  options.forEach((e) => {
    e.addEventListener("click", function () {
      game(e.value);
      changeOptionArea();
    });
  });
};

againBtn.addEventListener("click", () => {
  returnOptionArea();
});

optionSelected();
