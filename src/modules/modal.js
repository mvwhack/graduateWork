import {
  animate
} from './helpers';

const modal = () => {

  const button = document.querySelector('.header>.callback-btn');
  const modalBackground = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.modal-callback');
  const modalClose = modal.querySelector('.modal-close');
  const buttonServices = document.querySelector('.button-services');

  console.log(button);

  const openModal = () => {
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
  };
  const closeModal = () => {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  buttonServices.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  modalClose.addEventListener('click', () => {
    closeModal();
  });

  modalBackground.addEventListener('click', () => {
    closeModal();
  });

};

export default modal;