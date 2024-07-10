const btn = document.querySelector('.btn');
const hexCode = document.querySelector('.hexCode');

function color() {
  let colorCode = '#';
  const char = 'ABCDEF01123456789';
  for (let i = 0; i < 6; i++) {
    const idx = Math.floor(Math.random() * 16);
    colorCode += char[idx];
  }
  return colorCode;
}

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = color();
  hexCode.innerHTML = color();
  window.navigator.clipboard.writeText(hexCode.textContent);
  if (window.navigator.clipboard.writeText(hexCode.textContent)) {
    hexCode.innerHTML +=
      '<br/><span style="font-weight: normal; font-size: 24px;">copied<span/>';
  }
});
