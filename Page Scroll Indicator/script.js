let indicator = document.querySelector('.scrollIndicator .progressBar');
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(indicator);
// console.log(scrollHeight);

window.addEventListener('scroll', scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
