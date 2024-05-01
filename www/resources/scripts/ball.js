let ball = document.getElementById("ball");
ball.style.backgroundColor = "darkorchid";

function up() {
  ball.style.bottom = "65vh";
}

function down() {
  ball.style.bottom = "5vh";
}

function changeColour() {
  let currentBallColour = ball.style.backgroundColor;

  if (currentBallColour == "darkorchid") {
    ball.style.backgroundColor = "deeppink";
  } else if (currentBallColour == "deeppink") {
    ball.style.backgroundColor = "royalblue";
  } else {
    ball.style.backgroundColor = "darkorchid";
  }
}

document.addEventListener("keydown", up);

document.addEventListener("keyup", down);

ball.addEventListener("click", changeColour);
