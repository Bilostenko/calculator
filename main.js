
const number = document.querySelectorAll('.number')
const inp = document.querySelector('.inp')
const sign = document.querySelectorAll('.sign')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

/* enter number */
for (let i = 0; i < number.length; ++i){
  number[i].addEventListener('click', select)
}
/* enter sign */
for (let i = 0; i < number.length; ++i){
  sign[i].addEventListener('click', select)
}
function select(){
  inp.value += this.innerHTML
}

/*get result */
result.addEventListener('click', mathOperationResult)
function mathOperationResult(){
  inp.value = eval(inp.value) 
}

/* reset entered data */
reset.addEventListener('click', clear)
function clear(){
  inp.value= ""
}


/*------------------*/

const number = document.querySelectorAll('.number')
const inp = document.querySelector('.inp')
const sign = document.querySelectorAll('.sign')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')

/* enter number */
for (let i = 0; i < number.length; ++i){
  number[i].addEventListener('click', selectNumber)
}
/* enter sign */
for (let i = 0; i < sign.length; ++i){
  sign[i].addEventListener('click', selectSign)
}

function selectNumber(){
  inp.value += this.innerHTML
}

function selectSign(){
  inp.value += this.innerHTML
}

/*get result */
result.addEventListener('click', mathOperationResult)
function mathOperationResult(){
  inp.value = eval(inp.value) 
}

/* reset entered data */
reset.addEventListener('click', clear)
function clear(){
  inp.value= ""
}
