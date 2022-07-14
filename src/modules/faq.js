const faq = () => {
  const faqElem = document.querySelectorAll('.accordeon>.element');

  faqElem.forEach(elem => {
    elem.addEventListener('click', () => {
      const elemContent = elem.querySelector('.element-content');
      faqElem.forEach(remElem => {
        const remElemContent = remElem.querySelector('.element-content');
        remElemContent.style.display = 'none';
        remElem.classList.remove('active');
      });
      elem.classList.add('active');
      elemContent.style.display = 'block';
    });
  });

};
export default faq;