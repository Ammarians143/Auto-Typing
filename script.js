const span = document.querySelector("span");

const wordArray = ["Developer.", "Coder.", "Student.", "Designer."];
let wordArrayIndex = 0;

let wordIndex = 0;
let skipupdate = 0;
let reverseType = false;

const intervalId = setInterval(() => {
  if (skipupdate) {
    skipupdate--;
    return;
  }
  if (!reverseType) {
    skipupdate = 1;
    span.innerText = span.innerText + wordArray[wordArrayIndex][wordIndex];
    wordIndex++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
    wordIndex--;
  }
  if (span.innerText.length === 0 && reverseType) {
    reverseType = false;
    wordArrayIndex++;
  }
  if (wordArrayIndex === wordArray.length) {
    wordArrayIndex = 0;
  }

  if (wordIndex === wordArray[wordArrayIndex].length) {
    skipupdate = 7;
    reverseType = true;
  }
}, 100);
