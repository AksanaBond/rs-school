const pets = [
  {
    name: "Jennifer",
    img: "../../assets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
// массив рандомный из 48 карточек
const petsArray = [
  ...shuffle([...pets]),
  ...shuffle([...pets]),
  ...shuffle([...pets]),
  ...shuffle([...pets]),
  ...shuffle([...pets]),
  ...shuffle([...pets]),
];
console.log(petsArray);
// рандом
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let m = Math.floor(Math.random() * (i + 1));
    let t = array[i];
    array[i] = array[m];
    array[m] = t;
  }
  return array;
}
const burger = document.querySelector(".burger-menu");
const burger_ourpets = document.querySelector(".burger");
const pop_up_menu = document.querySelector(".pop-up-menu");
const menu = document.querySelector(".mobile-menu");
const menu_links = document.querySelectorAll(".menu-link");
const cards = document.querySelectorAll(".card");
const overlay = document.querySelector(".overlay");
const modal_close = document.querySelector(".modal_close");
let page = 1;
const button_pagination = document.querySelector(".button-pagination");
const button_pagination_active_one = document.querySelector(
  ".button-pagination-active-one"
);
const button_pagination_active_too = document.querySelector(
  ".button-pagination-active-too"
);
const button_pagination_inactive_too = document.querySelector(
  ".button-pagination-inactive-too"
);
const button_pagination_inactive_one = document.querySelector(
  ".button-pagination-inactive-one"
);
let max_page = 6;
let cardsperpage = 8;
const svg_inactive_one = document.getElementById("svg-inactive-one");
const path_inactive_one = svg_inactive_one.querySelector("path");
const svg_inactive_too = document.getElementById("svg-inactive-too");
const path_inactive_too = svg_inactive_too.querySelector("path");
const svg_active_one = document.getElementById("svg-active-one");
const svg_active_too = document.getElementById("svg-active-too");
const path_active_one = svg_active_one.querySelector("path");
const path_active_too = svg_active_too.querySelector("path");

// работа бургер меню
burger?.addEventListener("click", () => {
  document.body.classList.toggle("open");
});
pop_up_menu.addEventListener("click", () => {
  document.body.classList.toggle("open");
});
menu_links.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("open");
    setTimeout(() => (location.href = element.getAttribute("href")), 500);
  });
});
burger_ourpets?.addEventListener("click", () => {
  document.body.classList.toggle("open");
});
// замена модального окна в соответствии с карточкой
cards.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.toggle("modal_open");
    const name = element.getAttribute("data-name");
    const pet = pets.find((pet) => pet.name === name);
    console.log(name);
    console.log(pet);
    const modal_name = document.getElementById("modal_name");
    modal_name.innerHTML = name;
    const modal_img = document.getElementById("modal_img");
    modal_img.src = pet.img;
    const modal_type = document.getElementById("modal_type");
    modal_type.innerHTML = pet.type;
    const modal_breed = document.getElementById("modal_breed");
    modal_breed.innerHTML = pet.breed;
    const modal_description = document.getElementById("modal_description");
    modal_description.innerHTML = pet.description;
    const modal_age = document.getElementById("modal_age");
    modal_age.innerHTML = pet.age;
    const modal_inoculations = document.getElementById("modal_inoculations");
    modal_inoculations.innerHTML = pet.inoculations.join(", ");
    const modal_diseases = document.getElementById("modal_diseases");
    modal_diseases.innerHTML = pet.diseases.join(", ");
    const modal_parasites = document.getElementById("modal_parasites");
    modal_parasites.innerHTML = pet.parasites.join(", ");
  });
});
overlay?.addEventListener("click", () => {
  document.body.classList.toggle("modal_open");
});
modal_close?.addEventListener("click", () => {
  document.body.classList.toggle("modal_open");
});
// работа паггинации массив из 8 карточек
window.addEventListener("load", () => {
  const screenWidth = window.innerWidth;
  if(screenWidth > 768){
    sethighwidth();
  }else if(screenWidth < 768 && screenWidth > 600){
setmediumwidth() 
console.log ("medium")
  } else {
    setsmallwidth()
    console.log ("small")
  }
});
function fillcardscontainer() {
  const cards_container = document.querySelector(".cards-container");

  while (cards_container.childElementCount > 1) {
    cards_container.removeChild(cards_container.childNodes[0]);
  }

  const card = document.querySelector(".card");
  for (let i = 0; i < cardsperpage - 1; i++) {
    cards_container.innerHTML += card.outerHTML;
    console.log(cards_container);
  }
  for (let i = 0; i <= cardsperpage - 1; i++) {
    fillcard(cards_container.children[i], (page - 1) * cardsperpage + i);
  }
}

function fillcard(element, petIndex) {
  console.log(element);
  const name_card = element.querySelector(".name_card");
  name_card.innerHTML = petsArray[petIndex].name;
  console.log(name_card);
  const img_card = element.querySelector(".img_card");
  img_card.src = petsArray[petIndex].img;
  element.setAttribute("data-name", petsArray[petIndex].name);
}
// паггинация
button_pagination_active_one.addEventListener("click", () => {
  if (page < max_page) {
    page++;
  }
  if (page == max_page) {
    button_pagination_active_one.classList.add("button-pagination-inactive");
    button_pagination_active_one.classList.remove("button-pagination-active");
    button_pagination_active_one.disabled = true;
    button_pagination_active_too.classList.add("button-pagination-inactive");
    button_pagination_active_too.classList.remove("button-pagination-active");
    button_pagination_active_too.disabled = true;
    path_active_one.setAttribute("fill", "#CDCDCD");
    path_active_too.setAttribute("fill", "#CDCDCD");
  }
  if (page > 1) {
    button_pagination_inactive_too.classList.remove(
      "button-pagination-inactive"
    );
    button_pagination_inactive_one.classList.remove(
      "button-pagination-inactive"
    );
    button_pagination_inactive_too.classList.add("button-pagination-active");
    button_pagination_inactive_one.classList.add("button-pagination-active");
    button_pagination_inactive_too.disabled = false;
    button_pagination_inactive_one.disabled = false;
    path_inactive_one.setAttribute("fill", "#292929");
    path_inactive_too.setAttribute("fill", "#292929");
  }

  button_pagination.innerHTML = page;
  const cards_container = document.querySelector(".cards-container");

  const card = document.querySelector(".card");
  for (let i = 0; i <= cardsperpage - 1; i++) {
    fillcard(cards_container.children[i], (page - 1) * cardsperpage + i);
  }
});

button_pagination_active_too.addEventListener("click", () => {
  page = max_page;
  button_pagination.innerHTML = page;
  const cards_container = document.querySelector(".cards-container");

  const card = document.querySelector(".card");
  for (let i = 0; i <= cardsperpage - 1; i++) {
    fillcard(cards_container.children[i], (page - 1) * cardsperpage + i);
  }
  button_pagination_inactive_one.classList.remove("button-pagination-inactive");
  button_pagination_inactive_one.classList.add("button-pagination-active");
  button_pagination_inactive_one.disabled = false;
  button_pagination_inactive_too.classList.remove("button-pagination-inactive");
  button_pagination_inactive_too.classList.add("button-pagination-active");
  button_pagination_inactive_too.disabled = false;
  path_inactive_one.setAttribute("fill", "#292929");
  path_inactive_too.setAttribute("fill", "#292929");
  button_pagination_active_too.classList.remove("button-pagination-active");
  button_pagination_active_too.disabled = true;
  button_pagination_active_too.classList.add("button-pagination-inactive");
  button_pagination_active_one.classList.remove("button-pagination-active");
  button_pagination_active_one.classList.add("button-pagination-inactive");
  button_pagination_active_one.disabled = true;
  path_active_one.setAttribute("fill", "#CDCDCD");
  path_active_too.setAttribute("fill", "#CDCDCD");
});
button_pagination_inactive_one.addEventListener("click", () => {
  if (page > 1) {
    page--;
  }
  if (page < max_page) {
    button_pagination_active_one.classList.add("button-pagination-active");
    button_pagination_active_one.disabled = false;
    button_pagination_active_one.classList.remove("button-pagination-inactive");
    path_active_one.setAttribute("fill", "#292929");
    path_active_too.setAttribute("fill", "#292929");
  }
  if (page == 1) {
    button_pagination_inactive_one.classList.add("button-pagination-inactive");
    button_pagination_inactive_one.disabled = true;
    button_pagination_inactive_one.classList.remove("button-pagination-active");
    button_pagination_inactive_too.classList.add("button-pagination-inactive");
    button_pagination_inactive_too.classList.remove("button-pagination-active");
    button_pagination_inactive_too.disabled = true;
    path_inactive_one.setAttribute("fill", "#CDCDCD");
    path_inactive_too.setAttribute("fill", "#CDCDCD");
  }
  if (page >= 1) {
    button_pagination_active_too.classList.add("button-pagination-active");
    button_pagination_active_too.classList.remove("button-pagination-inactive");
    button_pagination_active_too.disabled = false;
  }
  button_pagination.innerHTML = page;
  const cards_container = document.querySelector(".cards-container");

  const card = document.querySelector(".card");
  for (let i = 0; i <= cardsperpage - 1; i++) {
    fillcard(cards_container.children[i], (page - 1) * cardsperpage + i);
  }
});
button_pagination_inactive_too.addEventListener("click", () => {
  if (page > 1) {
    page = 1;
  }
  button_pagination.innerHTML = page;
  const cards_container = document.querySelector(".cards-container");

  const card = document.querySelector(".card");
  for (let i = 0; i <= cardsperpage - 1; i++) {
    fillcard(cards_container.children[i], (page - 1) * cardsperpage + i);
  }
  button_pagination_inactive_too.classList.add("button-pagination-inactive");
  button_pagination_inactive_too.classList.remove("button-pagination-active");
  button_pagination_inactive_too.disabled = true;
  button_pagination_inactive_one.classList.add("button-pagination-inactive");
  button_pagination_inactive_one.classList.remove("button-pagination-active");
  button_pagination_inactive_one.disabled = true;
  button_pagination_active_one.classList.add("button-pagination-active");
  button_pagination_active_one.classList.remove("button-pagination-inactive");
  button_pagination_active_one.disabled = false;
  button_pagination_active_too.classList.add("button-pagination-active");
  button_pagination_active_too.classList.remove("button-pagination-inactive");
  button_pagination_active_too.disabled = false;
  path_inactive_one.setAttribute("fill", "#CDCDCD");
  path_inactive_too.setAttribute("fill", "#CDCDCD");
  path_active_one.setAttribute("fill", "#292929");
  path_active_too.setAttribute("fill", "#292929");
});

// паггинация на 768
let mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    setmediumwidth();
    console.log("good");
  } else {
    sethighwidth();
    console.log("false");
  }
});
function setmediumwidth() {
  max_page = 8;
  cardsperpage = 6;
  page = 1;
  button_pagination_active_one.classList.add("button-pagination-active");
  button_pagination_active_too.classList.add("button-pagination-active");
  button_pagination_active_one.classList.remove("button-pagination-inactive");
  button_pagination_active_too.classList.remove("button-pagination-inactive");
  button_pagination_active_one.disabled = false;
  button_pagination_active_too.disabled = false;
  button_pagination_inactive_one.classList.add("button-pagination-inactive");
  button_pagination_inactive_too.classList.add("button-pagination-inactive");
  button_pagination_inactive_one.classList.remove("button-pagination-active");
  button_pagination_inactive_too.classList.remove("button-pagination-active");
  button_pagination_inactive_one.disabled = true;
  button_pagination_inactive_too.disabled = true;
  path_inactive_one.setAttribute("fill", "#CDCDCD");
  path_inactive_too.setAttribute("fill", "#CDCDCD");
  path_active_one.setAttribute("fill", "#292929");
  path_active_too.setAttribute("fill", "#292929");
  button_pagination.innerHTML = page;

  fillcardscontainer()
}
function sethighwidth() {
  max_page = 6;
  cardsperpage = 8;
  page = 1;
  button_pagination_active_one.classList.add("button-pagination-active");
  button_pagination_active_too.classList.add("button-pagination-active");
  button_pagination_active_one.classList.remove("button-pagination-inactive");
  button_pagination_active_too.classList.remove("button-pagination-inactive");
  button_pagination_active_one.disabled = false;
  button_pagination_active_too.disabled = false;
  button_pagination_inactive_one.classList.add("button-pagination-inactive");
  button_pagination_inactive_too.classList.add("button-pagination-inactive");
  button_pagination_inactive_one.classList.remove("button-pagination-active");
  button_pagination_inactive_too.classList.remove("button-pagination-active");
  button_pagination_inactive_one.disabled = true;
  button_pagination_inactive_too.disabled = true;
  path_inactive_one.setAttribute("fill", "#CDCDCD");
  path_inactive_too.setAttribute("fill", "#CDCDCD");
  path_active_one.setAttribute("fill", "#292929");
  path_active_too.setAttribute("fill", "#292929");
  button_pagination.innerHTML = page;
  fillcardscontainer()
}
// паггинация на 320 px;
let mediaQuerysmall = window.matchMedia("(max-width: 600px)");
mediaQuerysmall.addEventListener("change", function (event) {
  if (event.matches) {
    setsmallwidth();
    console.log("good");
  } else {
    setmediumwidth();
    console.log("false");
  }
});
function setsmallwidth(){
  max_page = 16;
  cardsperpage = 3;
  page = 1;
  button_pagination_active_one.classList.add("button-pagination-active");
  button_pagination_active_too.classList.add("button-pagination-active");
  button_pagination_active_one.classList.remove("button-pagination-inactive");
  button_pagination_active_too.classList.remove("button-pagination-inactive");
  button_pagination_active_one.disabled = false;
  button_pagination_active_too.disabled = false;
  button_pagination_inactive_one.classList.add("button-pagination-inactive");
  button_pagination_inactive_too.classList.add("button-pagination-inactive");
  button_pagination_inactive_one.classList.remove("button-pagination-active");
  button_pagination_inactive_too.classList.remove("button-pagination-active");
  button_pagination_inactive_one.disabled = true;
  button_pagination_inactive_too.disabled = true;
  path_inactive_one.setAttribute("fill", "#CDCDCD");
  path_inactive_too.setAttribute("fill", "#CDCDCD");
  path_active_one.setAttribute("fill", "#292929");
  path_active_too.setAttribute("fill", "#292929");
  button_pagination.innerHTML = page;

  fillcardscontainer()
}