const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const resetBtn = document.getElementById('resetBtn');

let num = 0;
const increament = () => {
  const increamentValue = input.valueAsNumber;
  //.valueAsNumber to make the input value a number type
  // console.log(typeof input.value); //typeof is string
  num += increamentValue;
  return num;
};

const decreament = () => {
  const decreamentValue = input.valueAsNumber;
  num -= decreamentValue;
  return num;
};

addBtn.addEventListener('click', () => {
  if (input.valueAsNumber) {
    h1.innerHTML = increament();
    h2.innerHTML = increament();
  }
  num += 1;
  h1.innerHTML = num;
  h2.innerHTML = num;
});

subtractBtn.addEventListener('click', () => {
  if (input.valueAsNumber) {
    h1.innerHTML = decreament();
    h2.innerHTML = decreament();
  }
  num -= 1;
  h1.innerHTML = num;
  h2.innerHTML = num;
});

resetBtn.addEventListener('click', () => {
  num = 0;
  h1.innerHTML = num;
  h2.innerHTML = num;
});
