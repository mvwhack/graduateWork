const menu = () => {

  const menu = document.querySelector('.top-menu');

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a') && e.target.closest('a').className === '') {
      e.preventDefault();
      const menuAttr = e.target.closest('a').hash;
      const stepMenu = document.querySelector(menuAttr).getBoundingClientRect().top;

      window.scrollBy({
        top: stepMenu,
        behavior: "smooth"
      });
    }
  });

};

export default menu;