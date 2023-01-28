
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
// negativeBtn.addEventListener('click', negative)
// if number is non-positive, do nothing
// if number is positive, then change it to positive number
// if number is 0 then do nothing
// if input is a sign then change it to "-"
function negative() {
  const lastNum = output.value.match(/(?<=[^])\d+$/)?.[0];
  if (lastNum) {

    if (output.value > 0) {

    }
  }
}

/* perform an action with a % sign */
percentBtn.addEventListener('click', percent)
function percent() {

}
