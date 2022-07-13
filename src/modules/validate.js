const validate = () => {

  const form = document.querySelector('[name="form-callback"]');
  const nameInput = form.querySelectorAll('input[name="fio"]');
  const phoneInput = form.querySelectorAll('input[name="tel"]');

  const valid = (element, reg, testReg) => [
    element.forEach(input => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(reg, "");
        if ((e.target.value === '')) {
          e.target.classList.remove('success');
        } else if (testReg.test(e.target.value)) {
          e.target.classList.add('success');
        }
      });
    })
  ];

  valid(nameInput, /[^а-яА-Я\s]+/, /[а-яА-Я\s]{2,}/gi);
  valid(phoneInput, /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/, /^.{11}$/);

};

export default validate;