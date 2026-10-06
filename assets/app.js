document.querySelectorAll('.faq-q').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const expanded = item.classList.toggle('open');
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
});
