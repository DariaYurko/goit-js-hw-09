/**
 * Add data to localStorage
 * @param {String} key
 * @param {*} value
 */
function saveToLocalStorage(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

/**
 * Get data from localStorage
 * @param {String} key
 * @returns {*}
 */
function loadFromLocalStorage(key) {
  const json = localStorage.getItem(key);

  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

const formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');
const feedbackFormState = 'feedback-form-state';

feedbackFormEl.addEventListener('submit', event => {
  event.preventDefault();

  let usermail = feedbackFormEl.elements.email.value;
  let usermessage = feedbackFormEl.elements.message.value;

  usermail = usermail.trim();
  usermessage = usermessage.trim();

  if (usermail === '' || usermessage === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    // очисти локальне сховище, об’єкт formData і поля форми
    localStorage.removeItem(feedbackFormState);

    formData.email = '';
    formData.message = '';

    feedbackFormEl.reset();
  }

  console.log(formData);
});

feedbackFormEl.addEventListener('input', event => {
  // отримати значення з полів
  let usermail = feedbackFormEl.elements.email.value;
  let usermessage = feedbackFormEl.elements.message.value;

  usermail = usermail.trim();
  usermessage = usermessage.trim();

  // покласти значення з полів у об'єкт formData
  formData.email = usermail;
  formData.message = usermessage;

  // Введення даних в одне поле форми не видаляє дані в сховищі для іншого ????
  // додати об'кт у localStorage
  saveToLocalStorage(feedbackFormState, formData);
});

// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
const dataFromLS = localStorage.getItem(feedbackFormState);

if (dataFromLS !== null) {
  // console.log(dataFromLS);

  // використовуй дані для заповнення форми та об'єкта formData
  const parseData = JSON.parse(dataFromLS);

  // перевірка на помилку тут

  feedbackFormEl.elements.email.value = parseData.email;
  feedbackFormEl.elements.message.value = parseData.message;

  formData.email = parseData.email;
  formData.message = parseData.message;
}
