const burger = document.querySelector('.burger-menu');
const pop_up_menu = document.querySelector('.pop-up-menu');
const menu = document.querySelector('.mobile-menu');
burger.addEventListener('click', () => {
    document.body.classList.toggle('open');
});
pop_up_menu.addEventListener('click', () => {
    document.body.classList.toggle('open');
});