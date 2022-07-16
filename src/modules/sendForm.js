const sendForm = () => {

  const form = document.querySelector('[name="form-callback"]');
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка ...';
  const errorText = 'Ошибка ...';
  const successText = 'Спасибо! Наш манагер с вами Обязательно свяжется!';

  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      if (!input.classList.contains('success')) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Contant-type": "application/json"
      }
    }).then(res => res.json());
  };

  const delMessage = () => {
    document.querySelector('.loadMessage').remove();
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input[type="text"]');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.classList.add('loadMessage');
    statusBlock.textContent = loadText;
    form.append(statusBlock);
    statusBlock.style.color = '#e9bb26';

    formData.forEach((val, kay) => {
      formBody[kay] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          formElements.forEach(input => {
            input.value = '';
            input.classList.remove('success');
          });
          statusBlock.textContent = successText;
          statusBlock.style.color = '#00ff0d';
        })
        .catch(error => {
          statusBlock.textContent = errorText;
          statusBlock.style.color = '#ff0000';
        });
    } else {
      alert("Данные не валидны!");
      statusBlock.textContent = '';
    }

    setTimeout(delMessage, 3000);
  };

  try {
    if (!form) {
      throw new Error('Верните форму на родину!');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();

    });
  } catch (error) {
    console.log(error.message);
  }


};

export default sendForm;