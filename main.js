
const number = document.querySelectorAll('.number')
const inp = document.querySelector('.inp')

for (let i = 0; i < number.length; ++i){
  number[i].addEventListener('click', select)
}

function select(){
  inp.value = this.innerHTML
}