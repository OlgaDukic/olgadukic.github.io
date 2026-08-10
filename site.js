const button = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
button?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? '×' : '☰';
});
links?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
  if (button) button.textContent = '☰';
}));
