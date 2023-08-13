let score = document.querySelector("#score");
let timeLeft = document.querySelector("#time-left");
let square = document.querySelectorAll(".square");
let restartBtn = document.querySelector("#restart")
let SquareIndex, point = 0, intervalCount = 60;
function randomSquare() {
    square.forEach(element => {
        element.classList.remove("mole")
    });
    SquareIndex = Math.floor(Math.random() * square.length)
    square[SquareIndex].classList.add("mole")
}

square.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.currentTarget.id === square[SquareIndex].id)
            point++;
        score.textContent = point;
    })
})

let intervalCounter = setInterval(() => {
    intervalCount--;
    timeLeft.textContent = intervalCount
    if (intervalCount <= 0) {
        clearInterval(intervalRandomBox); // var variable
        clearInterval(intervalCounter)

        square[SquareIndex].classList.remove("mole")
        restartBtn.classList.add("restart")
        restartBtn.textContent = "Play again"
        restartBtn.onclick = () => {
            restartBtn.style.backgroundColor = "red"
            location.reload()
        }
    }
}, 1000)


// var use for hoisting // randomly change box position
var intervalRandomBox = setInterval(randomSquare, 800);

