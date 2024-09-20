const audio = document.querySelector("audio");
let playNumber = 0;
const next_button = document.querySelector(".next");
const back_button = document.querySelector(".back");
const singer = document.querySelector(".name");
const song = document.querySelector(".song");
const img = document.querySelector(".img");
const body = document.getElementById('body');
const progressbar = document.getElementById('progress');
const duration = document.querySelector(".duration");
const current = document.querySelector(".nowtime");

//проигрывание плэйера
let isPlay = false;
const play_button = document.querySelector(".play");
play_button.addEventListener("click", () => {
  playAudio();
});

function playAudio() {
  if (!isPlay) {
    audio.play();
    isPlay = true;
    play_button.src = "assets/svg/pause.png";
  } else {
    audio.pause();
    isPlay = false;
    play_button.src = "assets/svg/play.png";
  }
}
// перелистывание трека
const songs = [
  {
    name: "Beyonce",
    song: "Don't Hurt Yourself",
    src:"assets/audio/beyonce.mp3",
    img: "assets/img/lemonade.png",
    body:"linear-gradient(rgba(154, 180, 176, 0.6), transparent), url(assets/img/lemonade.png)",
  },
  {
    name: "Dua Lipa",
    song: "Don't Start Now",
    src:"assets/audio/dontstartnow.mp3",
    img: "assets/img/dontstartnow.png",
    body:"linear-gradient(rgba(154, 180, 176, 0.6), transparent), url(assets/img/dontstartnow.png)",
  },
];
next_button.addEventListener('click',() => {
    playNext();
});
function playNext(){ 
    if(playNumber < 1){
    playNumber += 1;}else{
        playNumber = 0;
    }
    singer.innerHTML = songs[playNumber].name;
    song.innerHTML = songs[playNumber].song;
    audio.src = songs[playNumber].src;
    img.src = songs[playNumber].img;
    body.style.backgroundImage = songs[playNumber].body;
    console.log ("playnext")
};
back_button.addEventListener('click', ()=>{
    playPrev();
});
function playPrev() {
    if(playNumber == 1){
        playNumber -= 1;}else{
            playNumber = songs.length-1;
        }
        singer.innerHTML = songs[playNumber].name;
        song.innerHTML = songs[playNumber].song;
        audio.src = songs[playNumber].src;
        img.src = songs[playNumber].img;
        body.style.backgroundImage = songs[playNumber].body;
        console.log ("playnext")
};
//прогресс-бар
function updateProgressBar() {
    const progress = (audio.currentTime/audio.duration)*100;
    progressbar.value = progress;
    duration.textContent = formatTime (audio.duration);
    current.textContent = formatTime (audio.currentTime);

    //progressbar.style.flexBasis = `%{progress}%`;
}

audio.addEventListener('timeupdate', updateProgressBar);
progressbar.addEventListener('input', () => {
    const newTime = (progressbar.value / 100) * audio.duration;
   audio.currentTime = newTime;
  });
  audio.addEventListener("loadeddata", () => {
    console.log(duration);
    duration.textContent = formatTime(audio.duration);
    
  },false);
  function formatTime (time) {
    const min = Math.floor (time/60);
    const second = Math.floor (time% 60);
    return `${min}:${second  
        < 10 ? '0' : ''}${second}`; 
  }
  setTimeout(() => {
    progressbar.value = 0;
  }, 10);