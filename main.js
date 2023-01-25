
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
/* result.addEventListener('click', mathOperation)
function mathOperation(){
  inp.value  
} */

/* reset entered data */
/* reset.addEventListener('click', reset)
function reset(){
  inp.reset()
} */


