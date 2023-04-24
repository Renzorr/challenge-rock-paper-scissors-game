const choice = ["paper", "scissors", "rock"];
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

let tl = gsap.timeline({});
let score = 0;
let winPlayer = false;
let winComputer = false;

const updateScore = () => {
  scoreText.innerHTML = score;
};

const updateSelection = (area, choice, winner) => {
  const winnerClass = winner ? "winner" : "";
  area.innerHTML = `
    <div class="option_bg disabled ${winnerClass}" id="${choice}">
      <div class="option_bg_item">
        <img src="/images/icon-${choice}.svg" alt="${choice} icon" />
      </div>
    </div>`;
};

const computerGeneratorScore = () => {
  return choice[Math.floor(Math.random() * choice.length)];
};

const handlePlayAgain = () => {
  optionsSection.classList.toggle("inactive");
  resultSection.classList.toggle("active");
};

const AnimationOptionSelected = (areaComputer, resultContainer, areaPlayer) => {
  tl.from(areaComputer, { opacity: 0, duration: 2 })
    .from(resultContainer, { opacity: 0, y: 600 }, "-=1")
    .from(areaPlayer, { opacity: 0 }, "-=2");
};

const game = (playerSelection) => {
  const computerSelection = computerGeneratorScore();
  const winPlayer =
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors");
  const winComputer =
    playerSelection === computerSelection ? false : !winPlayer;
  const result = winPlayer ? "You Win" : winComputer ? "You Lose" : "Draw";
  const scoreChange = winPlayer ? 1 : winComputer ? -1 : 0;

  updateSelection(areaPlayer, playerSelection, winPlayer);
  updateSelection(areaComputer, computerSelection, winComputer);
  resultTxt.innerHTML = result;
  score += scoreChange;
  updateScore();
  AnimationOptionSelected(areaComputer, resultContainer, areaPlayer);
  handlePlayAgain();
};

const handleOptionSelected = () => {
  options.forEach((option) => {
    option.addEventListener("click", () => {
      game(option.value);
    });
  });
};

const handlePlayAgainButton = () => {
  againBtn.addEventListener("click", handlePlayAgain);
};

handleOptionSelected();
handlePlayAgainButton();
