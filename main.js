
const numberBtns = document.querySelectorAll('.number')
const output = document.querySelector('.inp')
const signBtns = document.querySelectorAll('.sign')
const resultBtn = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')
const negativeBtn = document.querySelector('.negative')
const percentBtn = document.querySelector('.percent')
output.value = 0

/* enter number */
for (let i = 0; i < numberBtns.length; ++i) {
  numberBtns[i].addEventListener('click', handleNumbers)
}
function handleNumbers() {
  if (output.value == "0") {
    output.value = this.innerHTML;
  } else if (output.value.endsWith("+") || output.value.endsWith("-") || output.value.endsWith("*") || output.value.endsWith("/")) {
    if (output.value.endsWith("0")) {
      output.value = output.value.slice(0, -1) + this.innerHTML;
    } else {
      output.value += this.innerHTML;
    }
  } else {
    output.value += this.innerHTML;
  }
}

/* enter sign */
for (let j = 0; j < signBtns.length; ++j) {
  signBtns[j].addEventListener('click', handleOperators)
}
function handleOperators() {
  if (!isNaN(output.value.slice(-1)) || output.value === "") {
    output.value += this.innerHTML;
  } else if (this.innerHTML === "-" && output.value.slice(-1) === "-") {
    output.value = output.value.slice(0, -1);
  } else if (this.innerHTML === "-" && output.value.slice(-1) === "+") {
    output.value = output.value.slice(0, -1);
    output.value += this.innerHTML;
  } else if (this.innerHTML === "+" && output.value.slice(-1) === "+") {
    output.value = output.value.slice(0, -1);
  } else if (this.innerHTML === "*" && output.value.slice(-1) === "*") {
    output.value = output.value.slice(0, -1);
  } else if (this.innerHTML === "/" && output.value.slice(-1) === "/") {
    output.value = output.value.slice(0, -1);
  } else if (this.innerHTML === "%" && output.value.slice(-1) === "%") {
    output.value = output.value.slice(0, -1);
  }
}

/*get result */
resultBtn.addEventListener('click', mathOperationResult)
function mathOperationResult() {
  output.value = eval(output.value)
}

/* reset entered data */
resetBtn.addEventListener('click', clear)
function clear() {
  output.value = 0
}

/* change number to negative number */
negativeBtn.addEventListener('click', negative)
function negative() {
  if (output.value == 0) {
    output.value = "-" + this.innerHTML
  } else if (output.value.endsWith("+") || output.value.endsWith("-") || output.value.endsWith("*") || output.value.endsWith("/")) {
    output.value += "-" + this.innerHTML
  }
}

/* perform an action with a % sign */
percentBtn.addEventListener('click', getPercentage)


function getPercentage() {
  let referenceInput = output.value;
  let tempArr = output.value.split('');
  // if number is negative, remove '-' from input
  if (referenceInput.split('')[0] == '-') {
    tempArr.shift();
    output.value = tempArr.join('')
  }
  // get operation sign
  let currentSign = output.value.match(/[\+|\-|\*|\/]/).join('');
  let firstNumber = tempArr.slice(0, tempArr.indexOf(currentSign));
  // if number was negative, retrieve '-' sign
  if (referenceInput.split('')[0] == '-') {
    firstNumber.unshift('-');
  }
  // split array to get the number after the sign
  let arr = output.value.split(/[^0-9\.]/);
  // get the percentage part of the number
  let secondNumber;
  if (currentSign == '+' || currentSign == '-') {
    secondNumber = [...firstNumber];
    secondNumber.push('\*', arr[arr.length - 1], '\/100');
    secondNumber = [eval(secondNumber.join(''))];
  } else {
    secondNumber = arr[arr.length - 1] / 100;
    secondNumber = secondNumber.toString();
  }
  firstNumber = firstNumber.join('');
  output.value = firstNumber.concat(currentSign, secondNumber);
}
