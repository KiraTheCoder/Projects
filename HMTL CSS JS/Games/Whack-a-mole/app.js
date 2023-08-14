let score = document.querySelector("#score");
let timeLeft = document.querySelector("#time-left");
let square = document.querySelectorAll(".square");
let restartBtn = document.querySelector("#restart")
let SquareIndex, point = 0, hit_position, intervalCount = 60;
function randomSquare() {
    square.forEach(element => {
        element.classList.remove("mole")
    });
    SquareIndex = Math.floor(Math.random() * square.length)
    square[SquareIndex].classList.add("mole")
    hit_position = square[SquareIndex].id;
}

square.forEach(element => {
    element.addEventListener("click", () => {
        if (element.id === hit_position) {
            hit_position = null
            point++;
            score.textContent = point;
        }
    })
})

let intervalCounter = setInterval(() => {
    intervalCount--;
    timeLeft.textContent = intervalCount
    if (intervalCount <= 0) {
        clearInterval(intervalCounter)
        clearInterval(intervalRandomBox); // var variable declared below

        square[SquareIndex].classList.remove("mole")
        restartBtn.classList.add("restart")
        restartBtn.textContent = "Play again"
        restartBtn.onclick = () => {
            location.reload()
        }
    }
}, 1000)


// var use for hoisting // randomly change box position
var intervalRandomBox = setInterval(randomSquare, 800);

