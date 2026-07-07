const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email) {
      formMessage.textContent = 'Please enter your name and email.';
      return;
    }

    formMessage.textContent = 'Thank you, your message has been received!';
    form.reset();
  });
}
