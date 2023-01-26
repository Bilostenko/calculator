
const numberBtns = document.querySelectorAll('.number')
const output = document.querySelector('.inp')
const signBtns = document.querySelectorAll('.sign')
const resultBtn = document.querySelector('.result')
const resetBtn = document.querySelector('.reset')
output.value = 0
/* enter number */
for (let i = 0; i < numberBtns.length; ++i){
  numberBtns[i].addEventListener('click', handleNumbers)
}
/* enter sign */
for (let j = 0; j < signBtns.length; ++j){
  signBtns[j].addEventListener('click', handleOperators)
}
/*get result */
resultBtn.addEventListener('click', mathOperationResult)
function mathOperationResult(){
  output.value = eval(output.value) 
}
/* reset entered data */
resetBtn.addEventListener('click', clear)
function clear(){
  output.value = 0
}

function handleOperators(){
  // different sign&sign ending
  // same sign&sign ending
  // number ending
  // empty input.value
  if (output.value.at(-1) != "/") { 
    output.value += this.innerHTML
  } /* else if (){ 

  } else if (){ 

  } else { // 

  } */
}

function handleNumbers(){
  // input.value = 0 - replace 0 by number
  // input.value != 0 - add number
  // input.value ends with sign and 0 = replace by number
/*   if ()

*/
}
