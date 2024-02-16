const valentines = document.querySelector('.valentines');
const card = document.querySelector('.card');
const letter = document.querySelector('.letter');

let isOpen = false;

valentines.addEventListener('click', () => {
  if (!isOpen) {
    card.classList.add('open');
    letter.classList.add('out');
    isOpen = true;
  } else {
    card.classList.remove('open');
    letter.classList.remove('out');
    isOpen = false;
  }
});