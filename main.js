const number = document.querySelectorAll('.number');
const inp = document.querySelector('.inp');
const sign  = document.querySelectorAll('.sign');
const result = document.querySelector('.result');
const clearBtn = document.getElementById('clear');
const toggleBtn = document.getElementById('toggleSign');
const percentBtn = document.getElementById('percent');
const closeBtn = document.querySelector('.close-btn');


// clear input
clearBtn.addEventListener('click', () => {
  inp.value = '';
})

for(let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', insertValue);
}

for(let i = 0; i < sign.length; i++) {
  sign[i].addEventListener('click', insertValue);
}

function insertValue() {
  inp.value += this.innerText;
}

result.addEventListener('click', getResult);

function getResult() {
  if (/.+\/0$/.test(inp.value)) {
   alert("Can't divide by zero"); 
   inp.value = '';
  } else {
    inp.value = eval(inp.value);
  }
}

// '+/-' button
toggleBtn.addEventListener('click', changeSign);

function changeSign() {
  let arr = inp.value.split('')
  if (arr[0] == '-') {
    arr.shift();
  } else {
    arr.unshift('-');
  }
  inp.value = arr.join('');
}

// '%' button
percentBtn.addEventListener('click', getPercentage)


function getPercentage() {
  let referenceInput = inp.value;
  let tempArr = inp.value.split('');
  // if number is negative, remove '-' from input
  if (referenceInput.split('')[0] == '-') {
    tempArr.shift();
    inp.value = tempArr.join('')
  }
  // get operation sign
  let currentSign = inp.value.match(/[\+|\-|\*|\/]/).join('');
  let firstNumber = tempArr.slice(0, tempArr.indexOf(currentSign));
  // if number was negative, retrieve '-' sign
  if (referenceInput.split('')[0] == '-') {
    firstNumber.unshift('-');
  }
  // split array to get the number after the sign
  let arr = inp.value.split(/[^0-9\.]/);
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
  inp.value = firstNumber.concat(currentSign, secondNumber);
}

// perfrom only one operation at a time
sign.forEach((btn) => {
  btn.addEventListener('click', checkOneOperation);
  btn.addEventListener('click', checkForTwoSigns);
})

function checkOneOperation() {
  let signs = /[\+\-\*\/].+[\+\-\*\/]$/;
  if (signs.test(inp.value)) {
    let arr = inp.value.split('');
    let sign = arr[arr.length - 1];
    console.log(sign)
    arr.pop();
    inp.value = arr.join('');
    
    getResult();
    console.log(inp.value);
    arr = [inp.value, sign];
    console.log(arr)
    inp.value = arr.join('');
    console.log(inp.value)
  }
}

function checkForTwoSigns() {
  let arr = inp.value.split('');
  let forbiddenCombos = [
    ['*', '/'], ['/', '*'], ['-', '+'], ['+', '+'], ['/', '/'], ['*', '-'], ['*', '+'], ['/', '-'], ['+', '*'], ['+', '/'], ['-', '*'], ['-', '/'], ['/', '+']
  ];
  for (let i = 0; i < forbiddenCombos.length; i++) {
    if (arr[arr.length - 2] === forbiddenCombos[i][0] && arr[arr.length - 1] === forbiddenCombos[i][1]) {
      arr.pop();
      inp.value = arr.join('');
    }
  }
}


