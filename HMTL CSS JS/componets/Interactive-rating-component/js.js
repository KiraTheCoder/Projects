const btn = document.querySelector(".btn");
const ThankYouPage = document.querySelector(".thankyou");
const ratings = document.querySelectorAll(".circle");
const rating = document.querySelector("#rating");
const evaluationPage = document.querySelector(".evaluation");

var rate = 0;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    rate = ratings[i].innerText;
    for (let j = 0; j < ratings.length; j++) {
      ratings[j].style.backgroundColor = "hsl(216, 12%, 54%)";
    }
    for (let j = 0; j < rate; j++) {
      ratings[j].style.backgroundColor = "yellow";
    }
  });
}

btn.addEventListener("click", () => {
  evaluationPage.style.display = "none";
  rating.innerText = rate;
  ThankYouPage.style.display = "block";
});
