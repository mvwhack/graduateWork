const slider = () => {
  const sliderBlock = document.querySelector('.top-slider');
  const slides = sliderBlock.querySelectorAll('.item');
  const timeInterval = 3000;

  let currentSlide = 0;
  let interval;

  slides.forEach(slide => {
    let text = slide.querySelector('.table');
    text.style.opacity = '1';
    text.style.visibility = 'visible';
  });

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
    elems[index].style.display = 'flex';
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
    elems[index].style.display = 'none';
  };


  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'item-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'item-active');
  };

  const startSlide = (timer = 3000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide(timeInterval);
};

export default slider;