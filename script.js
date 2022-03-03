//DOM variables
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let addBtn = document.querySelector('.add')
let minusBtn = document.querySelector('.minus')
let timesBtn = document.querySelector('.times')
let divideBtn = document.querySelector('.divide')
let clrBtn = document.querySelector('.clr')
let answer = document.querySelector('.answer')
console.log(left, right, addBtn, minusBtn, timesBtn, divideBtn, clrBtn, answer)
//Event Listeners
addBtn.addEventListener('click', sum)
minusBtn.addEventListener('click', difference)
timesBtn.addEventListener('click', product)
divideBtn.addEventListener('click', division)
clrBtn.addEventListener('click', clear)


//Functions
function sum(){
let sum = parseInt(left.value) + parseInt(right.value)
answer.innerHTML = sum
console.log(answer)
}

function difference(){
  let difference = parseInt(left.value) - parseInt(right.value)
  answer.innerHTML = difference
  console.log(answer)
}

function product(){
  let product = parseInt(left.value) * parseInt(right.value)
  answer.innerHTML = product
  console.log(answer)
}

function division(){
  let division = parseInt(left.value) / parseInt(right.value)
  answer.innerHTML = division
  console.log(answer)
}

function clear(){
  let clear = left.value = ''
  let clear2 = right.value = ''
  answer.innerHTML = ''
  console.log(answer)
}