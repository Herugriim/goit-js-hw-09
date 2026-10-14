const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const unpacked = JSON.parse(savedData);
  formData.email = unpacked.email ?? '';
  formData.message = unpacked.message ?? '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  const repaired = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', repaired);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
  }
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
