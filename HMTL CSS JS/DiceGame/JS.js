const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2");
const head1 = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  var player1 = Math.floor(Math.random() * 6 + 1);
  var player2 = Math.floor(Math.random() * 6 + 1);

  if (player1 == player2) {
    head1.innerText = "🚩draw!🚩";
  } else {
    if (player1 > player2) {
      head1.innerText = "🚩 Player1 Wins!";
    } else {
      head1.innerText = "Player2 Wins! 🚩";
    }
  }
  firstDice.setAttribute("src", "images/dice" + player1 + ".png");
  secondDice.setAttribute("src", "images/dice" + player2 + ".png");
});
