const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (event) => {
    const target = event.target;  
    
    if (target.classList.contains('menu-list__link')) {
        humburgerElem.classList.remove('humburger-menu-active');
        menuElem.classList.remove('menu-active');
    }    
});