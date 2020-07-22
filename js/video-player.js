const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

let shouldUpdateVideo = true;
//Create timestamp format from input into seconds
function secondsToTimesstamp(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds.toFixed(0)}`;
}
//Play and pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//Update progress and timestamp
function updateProgress() {
  if (!shouldUpdateVideo) {
    return;
  }
  progress.value = (video.currentTime / video.duration) * 100;
  timestamp.innerText =
    secondsToTimesstamp(video.currentTime) +
    "/" +
    secondsToTimesstamp(video.duration);
}

//Set video time to progress
function setVideoProgress() {
  shouldUpdateVideo = true;
  video.currentTime = (parseInt(progress.value) / 100) * video.duration;
}

//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Listerns
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
progress.addEventListener("input", (e) => {
  shouldUpdateVideo = false;
  timestamp.innerText =
    secondsToTimestamp(video.duration * (e.target.value / 100)) +
    "/" +
    secondsToTimestamp(video.duration);
});
