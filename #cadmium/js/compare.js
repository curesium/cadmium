let output = document.querySelector('output');

function compare() {
  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');
  
  if (input1.value === input2.value) {
    output.innerHTML = "They're the same input"
  }
}

let submit = document.querySelector('#submitButton');
submit.addEventListener('click', compare);
