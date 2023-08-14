document.addEventListener("DOMContentLoaded", () => {
  let cardsChosen = [],
    cardsChosenId = [],
    cardsWon = [],
    cards = [];
  const container = document.querySelector(".flex-container"),
    resultDisplay = document.querySelector("#result"), showDescription = document.querySelector("#desc"),
    btn = document.querySelector("#restart-btn");
  // card array
  const CardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog.png",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog.png",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream.png",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream.png",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake.png",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake.png",
      img: "images/milkshake.png",
    },
    {
      name: "pizza.png",
      img: "images/pizza.png",
    },
    {
      name: "pizza.png",
      img: "images/pizza.png",
    },
  ];

  CardArray.sort(() => Math.random() - 0.5);

  function createBoard() {
    for (let i = 0; i < CardArray.length; i++) {
      var card = document.createElement("img");
      cards.push(card);
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      container.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(CardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", CardArray[cardId].img);
    if (cardsChosenId.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      setDesc("You found  a math")
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      setDesc("Sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === CardArray.length / 2) {
      setTimeout(() => {
        showDescription.textContent = "Congratulations! you find them all!";
        for (let i = 0; i < CardArray.length; i++) {
          cards[i].removeEventListener("click", flipCard);
        }
        btn.textContent = "Play Again";
        btn.classList.add("btn")
        btn.onclick = () => {
          location.reload()
        }
      }, 1000)
    }
  }

  function setDesc(str) {
    showDescription.textContent = str;
    setTimeout(() => {
      showDescription.textContent = "...";
    }, 1000);
  }
  createBoard();
});
