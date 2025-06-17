const nav = document.getElementById('nav-menu');
const devNote = document.querySelector('.devNote');

document.addEventListener('click', (e) => {
  if (e.target.closest('#nav-menu-toggle-btn')) {
    nav.classList.toggle('show');
    return;
  }
  if (!e.target.closest('#nav-menu') && nav.classList.contains('show')) {
    nav.classList.remove('show');
    return;
  }

  if (e.target.closest('.devNote-btn')) {
    devNote.classList.add('show');
    return;
  }
  if (!e.target.closest('.devNote-content') && devNote.classList.contains('show')) {
    devNote.classList.remove('show');
  }
});
