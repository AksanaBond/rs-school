const card = document.querySelector(".card");
const button_startGame = document.querySelector(".button_startGame");
const button_results = document.querySelector(".local_storage");
const table_result = document.querySelector(".table_result");
const button_close = document.querySelector(".button_cross");
const cards = [
  {
    number: "1",
    src: "assets/monsters/xy30_r2fo_230926.jpg",
  },
  {
    number: "2",
    src: "assets/monsters/7af2_57w2_230920.jpg",
  },
  {
    number: "3",
    src: "assets/monsters/8kem_grj9_230920.jpg",
  },
  {
    number: "4",
    src: "assets/monsters/8spp_yvjr_230920.jpg",
  },
  {
    number: "5",
    src: "assets/monsters/2001.i203.007_cartoon_monster_set-02.jpg",
  },
  {
    number: "6",
    src: "assets/monsters/8969806.png",
  },
  {
    number: "7",
    src: "assets/monsters/a0eo_uwde_230920.jpg",
  },
  {
    number: "8",
    src: "assets/monsters/dkdy_5fgc_230926.jpg",
  },
  {
    number: "9",
    src: "assets/monsters/jsln_5dxv_230920.jpg",
  },
  {
    number: "10",
    src: "assets/monsters/tdbh_la32_230920.jpg",
  },
  {
    number: "11",
    src: "assets/monsters/v2zo_u0et_230926.jpg",
  },
  {
    number: "12",
    src: "assets/monsters/xvp5_shog_230920.jpg",
  },
];
let cardsAll = [...shuffle(cards), ...shuffle(cards)];
// random
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let m = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[m];
    array[m] = t;
  }
  return array;
}
// display all card
const container = document.getElementById("cards");


function fillcards() {
    while (container.childElementCount > 1) {
        container.removeChild(container.childNodes[0]);}
  for (let i = 0; i < 23; i++) {
    container.innerHTML += card.outerHTML;
  }

  const img = document.querySelectorAll(".monster");
  img.forEach((element, index) => {
    element.src = cardsAll[index].src;
    element.dataset.number = cardsAll[index].number;
  });

  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach((element, index) => {
    element.dataset.number = cardsAll[index].number;
  });
}

fillcards();

// переворачивание карты
let amountFlipcouple = 0;
let startGametime;
let endGametime;
let gameTime;
const amountOfmoves = document.getElementById('amount');
const playTime = document.getElementById('time');
let cardsforFlip = document.querySelectorAll(".card");
let flippedCard = false;
let firstCard, secondCard;
function cardFlip() {
  this.classList.add("flipped");
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    if(!startGametime){
        startGametime = new Date();
    }
    return;
  } else if (this !== firstCard) {
    flippedCard = false;
    secondCard = this;
    amountFlipcouple++;
    amountOfmoves.innerHTML = amountFlipcouple;
    console.log(`количество открытия пар ${amountFlipcouple}`);
    compareCard();
  }
}

cardsforFlip.forEach((card) => card.addEventListener("click", cardFlip));
// Compare card
let coupleCard = 0;
const gratulation = document.querySelector(".gratulations");
const result = document.querySelector(".result");
function compareCard() {
  if (firstCard.dataset.number === secondCard.dataset.number) {
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
    coupleCard++;
    console.log(coupleCard);
    if(coupleCard === 12){
        gratulation.classList.add ("finish");
        result.classList.add ("finish");
        playTime.innerHTML =  timeFormat(endGametime);
    }

    return;
  } else {
    resetcard();
  }
}
// перевернуть карты если нет совпадения
function resetcard() {
  const cardToFlipBack1 = firstCard;
  const cardToFlipBack2 = secondCard;
  setTimeout(() => {
    cardToFlipBack1.classList.remove("flipped");
    cardToFlipBack2.classList.remove("flipped");
  }, 1000);
};
function timeFormat(time){
        time = new Date();
        gameTime = Math.floor((time - startGametime)/1000);
        const min = Math.floor(gameTime / 60);
  const second = Math.floor(gameTime % 60);
  return `${min}:${second < 10 ? "0" : ""}${second}`;
}
//start game
button_startGame.addEventListener('click', startGame);
function startGame(){
    cardsAll = [...shuffle(cards), ...shuffle(cards)];
    fillcards();
    startGametime = undefined;
    amountFlipcouple = 0;
    cardsforFlip = document.querySelectorAll(".card");
    flippedCard = false;
    coupleCard = 0;
    cardsforFlip.forEach((card) => card.addEventListener("click", cardFlip));
    gratulation.classList.remove ("finish");
    result.classList.remove ("finish");
};
button_results.addEventListener('click', openResults);
function openResults(){
    table_result.classList.toggle ("open");
}
button_close.addEventListener('click', ()=>{
    table_result.classList.remove("open");
})

