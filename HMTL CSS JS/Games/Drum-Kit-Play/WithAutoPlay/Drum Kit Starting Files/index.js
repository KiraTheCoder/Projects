let k, keyrecord = "", drums = document.querySelectorAll(".drum"), audios = [
  new Audio("./sounds/tom-1.mp3"),
  new Audio("./sounds/tom-2.mp3"),
  new Audio("./sounds/tom-3.mp3"),
  new Audio("./sounds/tom-4.mp3"),
  new Audio("./sounds/snare.mp3"),
  new Audio("./sounds/crash.mp3"),
  new Audio("./sounds/kick-bass.mp3"),
];

for (let i = 0; i < audios.length; i++) {
  drums[i].addEventListener("click", (e) => {
    play(e.currentTarget.innerHTML)
    pressed(e.currentTarget.innerHTML)
    keyrecord += e.currentTarget.innerHTML;
  })

  document.addEventListener("keydown", (e) => {
    play(e.key.toLowerCase())
    pressed(e.key.toLowerCase())
    keyrecord += e.key.toLowerCase()
  }
  )
}

function play(key) {
  switch (key) {
    case "w":
      audios[0].play();
      break;
    case "a":
      audios[1].play();
      break;
    case "s":
      audios[2].play();
      break;
    case "d":
      audios[3].play();
      break;
    case "j":
      audios[4].play();
      break;
    case "k":
      audios[5].play();
      break;
    case "l":
      audios[6].play();
  }
}

function pressed(key) {
  var press = document.querySelector("." + key)
  press.classList.add("pressed")
  setTimeout(() => { press.classList.remove("pressed") }, 50)
}

var btn = document.querySelector(".play")
btn.addEventListener("click", () => {
  btn.classList.add("pressed")
  setTimeout(() => { btn.classList.remove("pressed") }, 100)
  k = 0
  let DrumPlay = setInterval(() => {
    if (k >= keyrecord.length) {
      clearInterval(DrumPlay)
    }
    play(keyrecord[k])
    k++;

  }, 70)

})