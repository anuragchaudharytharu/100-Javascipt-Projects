const span = document.querySelector('span');

// const insert = window.prompt('insert the array element');
// let array = [`${insert}`];

const array = ['Awesome', 'Cool', 'Fun', 'Life', 'Famous', 'Weird'];

let arrayIndex = 0;
let wordIndex = 0;
let reverseType = false;

setInterval(() => {
  if (reverseType === false) {
    span.innerText += array[arrayIndex][wordIndex];
    wordIndex++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
  }

  if (span.innerText === array[arrayIndex]) {
    reverseType = true;
  }

  if (span.innerText.length === 0 && reverseType === true) {
    wordIndex = 0;
    reverseType = false;
    arrayIndex++;
  }

  if (arrayIndex === array.length) {
    arrayIndex = 0;
  }
}, 200);
