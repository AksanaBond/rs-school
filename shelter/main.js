const burger = document.querySelector('.burger-menu');
const burger_ourpets = document.querySelector('.burger');
const pop_up_menu = document.querySelector('.pop-up-menu');
const menu = document.querySelector('.mobile-menu');
const menu_links = document.querySelectorAll('.menu-link');
const modal = document.querySelectorAll('.card');
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
modal.forEach((element) => { element.addEventListener('click', () => {
    document.body.classList.toggle('modal_open');
});
})


