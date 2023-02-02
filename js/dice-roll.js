let curentLeft = document.getElementById("curentLeft");
let imageLeft = document.getElementById("imageLeft");
let scoreLeft = document.getElementById("scoreLeft");
let curentRight = document.getElementById("curent");
let imageRight = document.getElementById("image");
let scoreRight = document.getElementById("score");
let store = document.getElementById("store");
let roll = document.getElementById("roll");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let totalCurentLeft = 0;
let totalScoreLeft = 0;
let totalCurentRight = 0;
let totalScoreRight = 0;
let curentPlayer = 1;

roll.addEventListener("click", () => {
  if (curentPlayer === 1) {
    let dice = Math.floor(Math.random() * 6 + 1);
    totalCurentLeft += dice;
    curentLeft.innerHTML = `CURENT: ${totalCurentLeft}`;
    imageLeft.setAttribute("src", `img/dice/${dice}.png`);

    if (dice === 1) {
      totalCurentLeft = 0;
      curentLeft.innerHTML = `CURENT: ${totalCurentLeft}`;
      curentPlayer = 2;
      arrowLeft.style.visibility = "hidden";
      arrowRight.style.visibility = "visible";
    }

    if (totalCurentLeft >= 50) {
      alert(`win ${firstName.value}`);
      window.location.reload();
    }
  } else if (curentPlayer === 2) {
    let dice = Math.floor(Math.random() * 6 + 1);
    totalCurentRight += dice;
    curentRight.innerHTML = `CURENT: ${totalCurentRight}`;
    imageRight.setAttribute("src", `img/dice/${dice}.png`);

    if (dice === 1) {
      totalCurentRight = 0;
      curentRight.innerHTML = `CURENT: ${totalCurentRight}`;
      curentPlayer = 1;
      arrowLeft.style.visibility = "visible";
      arrowRight.style.visibility = "hidden";
    }

    if (totalCurentRight >= 50) {
      alert(`win ${secondName.value}`);
      window.location.reload();
    }
  }
});

store.addEventListener("click", () => {
  if (curentPlayer === 1) {
    totalScoreLeft += totalCurentLeft;
    scoreLeft.innerHTML = `SCORE: ${totalScoreLeft}`;
    curentLeft.innerHTML = `CURENT: 0`;
    totalCurentLeft = 0;
    curentPlayer = 2;
    arrowLeft.style.visibility = "hidden";
    arrowRight.style.visibility = "visible";

    if (totalScoreLeft >= 50) {
      alert(`win ${firstName.value}`);
      window.location.reload();
    }
  } else if (curentPlayer === 2) {
    totalScoreRight += totalCurentRight;
    scoreRight.innerHTML = `SCORE: ${totalScoreRight}`;
    curentRight.innerHTML = `CURENT: 0`;
    totalCurentRight = 0;
    curentPlayer = 1;
    arrowLeft.style.visibility = "visible";
    arrowRight.style.visibility = "hidden";

    if (totalScoreRight >= 50) {
      alert(`win ${secondName.value}`);
      window.location.reload();
    }
  }
});
