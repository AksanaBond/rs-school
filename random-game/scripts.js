const card = document.querySelector(".card");
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
const cardsAll = [...shuffle(cards), ...shuffle(cards)];
console.log(cardsAll);
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
  for (let i = 0; i < 23; i++) {
    container.innerHTML += card.outerHTML;
    console.log(container);
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
const cardsforFlip = document.querySelectorAll(".card");
let flippedCard = false;
let firstCard, secondCard;
function cardFlip() {
  this.classList.add("flipped");
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  } else if (this !== firstCard) {
    flippedCard = false;
    secondCard = this;
    compareCard();
  }
}

cardsforFlip.forEach((card) => card.addEventListener("click", cardFlip));
// Compare card
function compareCard() {
  if (firstCard.dataset.number === secondCard.dataset.number) {
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
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
}
