const carousel = () => {
  const slider = document.querySelector('.services-carousel');
  const slides = slider.querySelectorAll('.col-sm-6');
  const btnNext = document.querySelector('.arrow-right');
  const btnPrev = document.querySelector('.arrow-left');

  slides.forEach((slide, index) => {
    if (index <= '2') {
      slide.classList.add('active');
    }
  });

  const activeBlock = () => {
    slides.forEach(slide => {
      slide.classList.toggle('active');

      slide.classList.forEach(activeSlide => {
        if (activeSlide == 'active') {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    });
  };

  btnNext.addEventListener('click', () => {
    activeBlock();
  });

  btnPrev.addEventListener('click', () => {
    activeBlock();
  });
  activeBlock();
};

export default carousel;