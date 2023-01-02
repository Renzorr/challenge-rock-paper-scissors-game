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

const updateScore = () => {
  scoreText.innerHTML = score;
};

const updatePlayerSelection = (eleccionHumano) => {
  areaPlayer.innerHTML = `
  <div class="option_bg disabled" id="${eleccionHumano}">
  <div class="option_bg_item">
    <img src="/images/icon-${eleccionHumano}.svg" alt="${eleccionHumano} icon" />
  </div>
  </div>`;
};

const updateComputerSelection = (eleccionMaquina) => {
  areaComputer.innerHTML = `
      <div class="option_bg disabled" id="${eleccionMaquina}">
      <div class="option_bg_item">
        <img src="/images/icon-${eleccionMaquina}.svg" alt="${eleccionMaquina} icon" />
      </div>
      </div>`;
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

const juego = (eleccionHumano) => {
  let eleccionMaquina = computerGeneratorScore();

  tl.from(areaComputer, { opacity: 0, duration: 2 }).from(
    resultContainer,
    {
      opacity: 0,
      y: 600,
    },
    "-=1"
  );

  updateComputerSelection(eleccionMaquina);
  updatePlayerSelection(eleccionHumano);

  if (
    (eleccionHumano == "paper" && eleccionMaquina == "rock") ||
    (eleccionHumano == "scissors" && eleccionMaquina == "paper") ||
    (eleccionHumano == "rock" && eleccionMaquina == "scissors")
  ) {
    resultTxt.innerHTML = "You Win";
    score++;
  } else if (eleccionHumano == eleccionMaquina) {
    resultTxt.innerHTML = "Draw";
  } else {
    resultTxt.innerHTML = "You Loose";
    score--;
  }

  updateScore();
  return;
};

const eleccionJugador = () => {
  options.forEach((e) => {
    e.addEventListener("click", function () {
      juego(e.value);
      changeOptionArea();
    });
  });
};

againBtn.addEventListener("click", () => {
  returnOptionArea();
});

eleccionJugador();
