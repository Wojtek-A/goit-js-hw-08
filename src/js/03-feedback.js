import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const dataHandler = () => {
  const input = { mail: email.value, text: message.value };
  const inputJSON = JSON.stringify(input);
  localStorage.setItem('feedback-form-state', inputJSON);
};

[email, message].forEach(function (element) {
  element.addEventListener('keyup', throttle(dataHandler, 500));
});

const data = JSON.parse(localStorage.getItem('feedback-form-state'));

const updateData = () => {
  if (email.value === '' || message.value === '') {
    email.value = data.mail;
    message.value = data.text;
  }
};
updateData();

form.addEventListener('submit', saveMessage);
function saveMessage(event) {
  event.preventDefault();
  form.reset();
  localStorage.clear();
}
