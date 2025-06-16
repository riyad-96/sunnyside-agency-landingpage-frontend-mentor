const nav = document.getElementById('nav-menu');

document.addEventListener('click', (e) => {
  if (e.target.closest('#nav-menu-toggle-btn')) {
    nav.classList.toggle('show');
    return;
  }
  if (!e.target.closest('#nav-menu') && nav.classList.contains('show')) {
    nav.classList.remove('show');
  }
});
