const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const volume = document.getElementById("volume");

//  song titles
const songs = ["hey", "summer", "ukulele"];

// keep track of song
let songIndex = 2;

function loadSong(song) {
  title.textContent = song;
  audio.src = `./music/${song}.mp3`;
  cover.src = `./images/${song}.jpg`;
}

// initially load song details
loadSong(songs[songIndex]);

// play song
function playSong() {
  musicContainer.classList.add("play");
  const icon = document.querySelector("i.fa-play");
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
  audio.play();
}
// pause song

function pauseSong() {
  musicContainer.classList.remove("play");
  const icon = document.querySelector("i.fa-pause");
  icon.classList.add("fa-play");
  icon.classList.remove("fa-pause");
  audio.pause();
}
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// play previous song
function preSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  if (musicContainer.classList.contains("play")) audio.play();
}

// play next song

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  if (musicContainer.classList.contains("play")) audio.play();
}

prevBtn.addEventListener("click", preSong);
nextBtn.addEventListener("click", nextSong);

// show live progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  progress.style.width = `${(currentTime / duration) * 100}%`;
}

audio.addEventListener("timeupdate", updateProgress);

// select random middle point of song
function setProgress(e) {
  // clientWidth return inner width including padding
  const innerWidth = this.clientWidth;
  //   offsetX  return x coordinate of mouse point on node element
  const clickX = e.offsetX;
  const duration = audio.duration;

  // (point/total)* duration Of audio  --> duration because fo audio length may vary
  audio.currentTime = (clickX / innerWidth) * duration;
}

progressContainer.addEventListener("click", setProgress);

// Add ons

volume.onchange = function () {
  audio.volume = volume.value;
};
