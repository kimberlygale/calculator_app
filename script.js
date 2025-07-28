let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value !== '' && !isOperator(display.value.slice(-1))) {
    display.value += op;
  }
}

function isOperator(char) {
  return ['+', '-'].includes(char);
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
