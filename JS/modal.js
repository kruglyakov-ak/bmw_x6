const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
    modalElem.classList.remove('hidden');
};

const closeModal = () => {
    modalElem.classList.add('hidden');
};


for (let moreElem of moreElems) {
    moreElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('overlay') || 
            target.classList.contains('modal__close')) {
            closeModal();
        }
    });
}