const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];
const burger = document.querySelector('.burger-menu');
const burger_ourpets = document.querySelector('.burger');
const pop_up_menu = document.querySelector('.pop-up-menu');
const menu = document.querySelector('.mobile-menu');
const menu_links = document.querySelectorAll('.menu-link');
const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');
const modal_close = document.querySelector('.modal_close');
burger?.addEventListener('click', () => {
    document.body.classList.toggle('open');
});
pop_up_menu.addEventListener('click', () => {
    document.body.classList.toggle('open');
});
menu_links.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('open');
        setTimeout(() =>location.href = element.getAttribute('href'), 500);
    });
})
burger_ourpets?.addEventListener('click', () => {
    document.body.classList.toggle('open');
});
cards.forEach((element) => { element.addEventListener('click', () => {
    document.body.classList.toggle('modal_open');
    const name = element.getAttribute('data-name');
    const pet = pets.find(pet => pet.name === name);
    console.log(name);
    console.log (pet);
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
overlay?.addEventListener('click', () => {
    document.body.classList.toggle('modal_open');
});
modal_close?.addEventListener('click', () => {
    document.body.classList.toggle('modal_open');
});
