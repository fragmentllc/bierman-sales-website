const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearNode = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    if (formStatus) {
      formStatus.textContent = `Thanks, ${name || 'friend'} — your message is ready to be sent. Please email Bierman Inc at sbierman@biermansales.com.`;
    }

    contactForm.reset();
  });
}
