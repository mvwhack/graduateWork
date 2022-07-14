const scrollToTop = () => {
  const topWindow = document.querySelector('.main-wrapper');
  const buttonUp = document.querySelector('.up');
  const servicesBlock = document.getElementById('services');
  const servicesBlockTop = servicesBlock.getBoundingClientRect().top;

  buttonUp.style.display = 'none';

  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    if (top >= servicesBlockTop) {
      buttonUp.style.display = 'flex';
    } else if (top < servicesBlockTop) {
      buttonUp.style.display = 'none';
    }
  });

  buttonUp.addEventListener('click', () => {
    const topTo = topWindow.getBoundingClientRect().top;
    window.scrollBy({
      top: topTo,
      behavior: "smooth"
    });
  });
};

export default scrollToTop;