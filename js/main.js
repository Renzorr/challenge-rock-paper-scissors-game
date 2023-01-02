const maquina = ["paper", "scissor", "rock"];
const options = document.querySelectorAll(".option_bg");
const optionsSection = document.querySelector(".option");
const resultSection = document.querySelector(".option_result");
const scoreText = document.getElementById("score-txt");
const resultTxt = document.getElementById("result-txt");
const againBtn = document.getElementById("again");
const areaPlayer = document.getElementById("player");
const areaComputer = document.getElementById("computer");

let score = 0;

const updateScore = () => {
  scoreText.innerHTML = score;
};

const juego = (eleccionHumano, eleccionBtn) => {
  let eleccionMaquina = generadorEleccionMaquina();

  if (
    (eleccionHumano == "paper" && eleccionMaquina == "rock") ||
    (eleccionHumano == "scissor" && eleccionMaquina == "paper") ||
    (eleccionHumano == "rock" && eleccionMaquina == "scissor")
  ) {
    alert("gana jugador");
    score++;
  } else if (eleccionHumano == eleccionMaquina) {
    alert("empate");
  } else {
    alert("gana maquina");
    score--;
  }

  updateScore();
  console.log(eleccionHumano);
  console.log(eleccionMaquina);
  return;
};

const eleccionJugador = () => {
  options.forEach((e) => {
    e.addEventListener("click", function () {
      juego(e.value, e);
      optionsSection.classList.add("inactive");
      resultSection.classList.add("active");
    });
  });
};

const generadorEleccionMaquina = () => {
  return maquina[Math.floor(Math.random() * maquina.length)];
};

againBtn.addEventListener("click", () => {
  optionsSection.classList.remove("inactive");
  resultSection.classList.remove("active");
});

eleccionJugador();
