const openButton = document.querySelector('.header__button-menu');
const nav = document.querySelector('.header-nav');
const openModal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.modal-container--closed')
const btnAuth = document.querySelector('.header-nav__link--auth');
const btnTabletAuth = document.querySelector('.header__button');
const btnModalClose = document.querySelector('.modal__button-close');
const items = document.querySelectorAll('.nav-page__item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const headerListBtns = document.querySelectorAll('.header-nav__link--list');





openButton.addEventListener('click', (evt) => {
    if(nav.classList.contains('header-nav--closed')) {
        nav.classList.remove('header-nav--closed');       
        openButton.classList.add('header__button-menu--close');

    }else {
     nav.classList.add('header-nav--closed');
     openButton.classList.remove('header__button-menu--close');
    }
});

headerListBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.querySelector('.content');
        content.classList.toggle('content--closed');
    });
});

openModal.addEventListener('click', (evt) =>{
    openModal.classList.add('modal-container--closed');
});

function showModal() {
    openModal.classList.remove('modal-container--closed');
}

function hideModal() {
    openModal.classList.add('modal-container--closed');
}

function handleKeyPress(event) {
    if (event.key === 'Escape') { 
        hideModal();
    }
}

btnAuth.addEventListener('click', showModal); 
btnModalClose.addEventListener('click', hideModal); 
document.addEventListener('keydown', handleKeyPress); 
btnTabletAuth.addEventListener('click', showModal);

function updateSlider() {
    const totalItems = items.length;
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
    const offset = -currentIndex * 100; 
    document.querySelector('.nav-page__list').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

updateSlider();



const tooltipBtn = document.querySelector('.well__tooltip-button');
const tooltip = document.querySelector('.well__tooltip-text');

tooltipBtn.addEventListener('click', (evt) => {
    tooltip.classList.add('well__tooltip-text--closed')
});
