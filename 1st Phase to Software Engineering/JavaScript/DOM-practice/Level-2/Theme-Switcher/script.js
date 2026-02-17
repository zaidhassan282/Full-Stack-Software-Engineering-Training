const button = document.getElementById('theme-toggle');
const container = document.getElementById('container');
const text = document.getElementById('theme-title');

button.addEventListener('click', () => {
  container.style.backgroundColor = container.style.backgroundColor === 'black' ? 'white' : 'black';
  text.style.color = text.style.color === 'white' ? 'black' : 'white';
});