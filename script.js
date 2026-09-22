let songIndex = 0;

let play = new Audio("assets/audio/sleep/sleep.mp3");
let mainPlay = document.getElementById("mainPly");

let p1 = new Audio("assets/audio/sleep/sleep.mp3");
let mainp1 = document.getElementById("p1");

let p2 = new Audio("assets/audio/sleep/deepsleep.mp3");
let mainp2 = document.getElementById("p2");

let p3 = new Audio("assets/audio/sleep/lofisleep.mp3");
let mainp3 = document.getElementById("p3");

let progress = document.getElementById("progress");

let songs = [
  { name: "Sleep", path: "assets/audio/sleep/sleep.mp3", cover: "assets/img/cover.jpg" },
  { name: "DeepSleep", path: "assets/audio/sleep/deepsleep.mp3", cover: "assets/img/cover.jpg" },
  { name: "LofiSleep", path: "assets/audio/sleep/lofisleep.mp3", cover: "assets/img/cover.jpg" },
];

// p1
mainp1.addEventListener("click", () => {
  if (p1.paused) {
    p1.play();
    p2.pause();
    p3.pause();
    mainp1.src = "assets/img/pause-solid-full.svg";
    mainp1.alt = "Pause Button";
    mainPlay.src = "assets/img/pause-solid-full.svg";
    mainPlay.alt = "Pause Button";
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
    play = Audio("assets/audio/sleep/sleep.mp3");
    mainPlay = document.getElementById("p1");
  } else {
    play.pause();
    p1.pause();
    p2.pause();
    p3.pause();
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainPlay.src = "assets/img/play-solid-full.svg";
    mainPlay.alt = "Play button";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
    play = Audio("assets/audio/sleep/sleep.mp3");
    mainPlay = document.getElementById("p1");
  }
});

// p2
mainp2.addEventListener("click", () => {
  if (p2.paused) {
    p1.pause();
    p2.play();
    p3.pause();
    mainp2.src = "assets/img/pause-solid-full.svg";
    mainp2.alt = "Pause Button";
    mainPlay.src = "assets/img/pause-solid-full.svg";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
    play = Audio("assets/audio/sleep/deepsleep.mp3");
    mainPlay = document.getElementById("p2");
  } else {
    p1.pause();
    p2.pause();
    p3.pause();
    play.pause();
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainPlay.src = "assets/img/play-solid-full.svg";
    mainPlay.alt = "Play button";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
    play = Audio("assets/audio/sleep/deepsleep.mp3");
    mainPlay = document.getElementById("p2");
  }
});

// p3
mainp3.addEventListener("click", () => {
  if (p3.paused) {
    p1.pause();
    p2.pause();
    p3.play();
    mainp3.src = "assets/img/pause-solid-full.svg";
    mainp3.alt = "Pause Button";
    mainPlay.src = "assets/img/pause-solid-full.svg";
    mainPlay.alt = "Pause Button";
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    play = Audio("assets/audio/sleep/lofisleep.mp3");
    mainPlay = document.getElementById("p3");
  } else if (p3.play) {
    p1.pause();
    p2.pause();
    p3.pause();
    play.pause();
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
    mainPlay.src = "assets/img/play-solid-full.svg";
    mainPlay.alt = "Play button";
    play = Audio("assets/audio/sleep/lofisleep.mp3");
    mainPlay = document.getElementById("p3");
  }
});

// mainPlay
mainPlay.addEventListener("click", () => {
  if (p1.paused) {
    p1.play();
    p2.pause();
    p3.pause();
    mainp1.src = "assets/img/pause-solid-full.svg";
    mainp1.alt = "Pause Button";
    mainPlay.src = "assets/img/pause-solid-full.svg";
    mainPlay.alt = "Pause Button";
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
  } else {
    play.pause();
    p1.pause();
    p2.pause();
    p3.pause();
    mainp2.src = "assets/img/play-solid-full.svg";
    mainp2.alt = "Play button";
    mainPlay.src = "assets/img/play-solid-full.svg";
    mainPlay.alt = "Play button";
    mainp1.src = "assets/img/play-solid-full.svg";
    mainp1.alt = "Play button";
    mainp3.src = "assets/img/play-solid-full.svg";
    mainp3.alt = "Play button";
  }
});

play.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});
