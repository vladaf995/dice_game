let firstName = document.getElementById("fname");
let secondName = document.getElementById("sname");
let playerFirst = document.getElementById("player-first");
let secondPlayer = document.getElementById("player-second");
let startGame = document.getElementById("start-game");
let gameLayOut = document.querySelector(".game-layout");
let inputName = document.querySelector(".input-name");
let counter = document.querySelector(".counter");
let timeleft = 3;

startGame.addEventListener("click", (e) => {
  e.preventDefault();
  counter.style.display = "flex";
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
  playerFirst.innerHTML = firstName.value;
  playerFirst.style.textTransform = "capitalize";
  secondPlayer.innerHTML = secondName.value;
  secondPlayer.style.textTransform = "capitalize";
  setTimeout(() => {
    gameLayOut.style.display = "flex";
    counter.style.display = "none";
  }, 3000);

  inputName.style.display = "none";
});
