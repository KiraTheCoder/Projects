"use strict";
let count = 0,
  str1 = "",
  str2 = "",
  remain_str = "123456789",
  won = false,
  cases = ["123", "456", "789", "147", "258", "369", "159", "357"];
let box = document.querySelectorAll(".item");
let reset_btn = document.querySelector("h2");
let result_value = document.querySelector("h1");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function add_event() {
    count++;
    let val = box[i].querySelector("p").innerHTML;

    if (count % 2 !== 0) {
      box[i].querySelector("strong").innerHTML = "X";
      str1 += val;
      remain_str = remain_str.replace(val, "");
      checkScore(str1, 1);
      box[i].removeEventListener("click", add_event);
      if (!won) {
        result_value.innerHTML = "Player O to move";
        setTimeout(() => {
          let random_value = nextMove();
          box[random_value - 1].querySelector("strong").innerHTML = "O";
          str2 += random_value;
          remain_str = remain_str.replace(random_value, "");
          checkScore(str2, 2);
          if (!won) {
            result_value.innerHTML = "Player X to move";
          }
          box[random_value - 1].removeEventListener("click", add_event);
        }, 500);
      }
    }
    // -------- code for human second player
    // else {
    //   box[i].querySelector("strong").innerHTML = "O";
    //   str2 += val;
    //   checkScore(str2, 2);
    //   if (!won) {
    //     result_value.innerHTML = "Player X to move";
    //   }
    // }

    if (count == 9) {
      result("Game draw!");
    }
  });
}

function nextMove() {
  return remain_str[Math.floor(Math.random() * remain_str.length)];
}
function checkScore(str, playerNum) {
  for (let j = 0; j < cases.length; j++) {
    let re = RegExp(`[${cases[j]}]`, "g");
    if (str.match(re) !== null && str.length >= 3) {
      if (
        cases[j] ==
        str
          .match(re)
          .sort((a, b) => a - b)
          .join("")
      ) {
        if (count == 9) count = 8;
        won = true;
        result(playerNum + " Won the Game!");
      }
    }
  }
}

function result(str) {
  console.log(str);
  reset_btn.style.display = "block";
  reset_btn.onclick = () => {
    location.reload();
  };
  result_value.innerHTML = str;
}