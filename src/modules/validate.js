const validate = () => {

  const form = document.querySelector('[name="form-callback"]');
  const nameInput = form.querySelectorAll('input[name="fio"]');
  const phoneInput = form.querySelectorAll('input[name="tel"]');

  const valid = (element, reg) => [
    element.forEach(input => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(reg, "").substr(0, 13);
        if ((e.target.value === '')) {
          e.target.classList.remove('success');
        } else {
          e.target.classList.add('success');
        }
      });
    })
  ];

  valid(nameInput, /[^а-яА-Я\s]+/);
  valid(phoneInput, /[^\d\+]/g);

};

export default validate;