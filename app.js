const send = document.getElementById('send');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

send.addEventListener('click', (e) => {
  e.preventDefault();
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});
mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});













