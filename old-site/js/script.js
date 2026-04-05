// Simple JavaScript to support responsive navigation and form interaction.

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
  // Basic form submission handler to prevent page reload and show an alert
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real website this would send data to the server. Here we just show a message.
      alert('Thank you for reaching out! We will get back to you soon.');
      contactForm.reset();
    });
  }
});