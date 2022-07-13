import {
  animate
} from './helpers';

const modal = () => {

  const button = document.querySelector('.header');
  const modalBackground = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.modal-callback');
  const modalClose = modal.querySelector('.modal-close');


  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalBackground.style.display = 'block';

    if (screen.width < 768) {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'block';
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.top = (25 * progress) + '%';
        }
      });
    }
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
  });

  modalBackground.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
  });

};

export default modal;