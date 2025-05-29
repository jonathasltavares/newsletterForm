const form = document.getElementById('form');
const mainContent = document.getElementById('mainContent');
const sucessMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const displayUserEmail = document.getElementById('displayUserEmail');
const dismissButton = document.getElementById('dismissButton');
dismissButton.addEventListener('click', () => {
  mainContent.classList.toggle('hidden');
  sucessMessage.classList.toggle('hidden');
});

function handleSubmit(e){
    e.preventDefault();

  const formDataEntries = new FormData(form).entries();
  const { email } = Object.fromEntries(formDataEntries);

    console.log({email});
    if(validateEmail(email) !== '') {
        errorMessage.textContent = validateEmail(validateEmail(email));
        errorMessage.classList.remove('hidden');
      return;
    }else{
        errorMessage.classList.add('hidden');
        mainContent.classList.toggle('hidden');
        sucessMessage.classList.toggle('hidden');
        displayUserEmail.textContent = email;
        form.reset();
    }
}

function validateEmail(email) {
  if (!email) return 'Email is required';

  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}

form.addEventListener('submit', handleSubmit);