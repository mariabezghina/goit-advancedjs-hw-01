const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(storageKey);
if (savedData) {
    try {
        formData = JSON.parse(savedData);
    } catch (error) {
        console.log(error);
    }
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  try {
    localStorage.setItem(storageKey, JSON.stringify(formData));
  } catch (error) {
    console.log(error);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
});