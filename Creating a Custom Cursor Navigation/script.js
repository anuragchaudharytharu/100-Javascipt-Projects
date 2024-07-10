const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
  cursor.style.left = event.x + 'px';
  cursor.style.top = event.y + 'px';
});
