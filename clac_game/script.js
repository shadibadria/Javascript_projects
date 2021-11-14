'use strict';


let number1 = 0
let number2 = 0;
let score = 0
let number_choosen =10;

// biggest number to calculate
function biggest_number_rest(){
    number1 = Math.trunc(Math.random() * number_choosen ) +1 
    number2 = Math.trunc(Math.random() * number_choosen) +1 
    document.querySelector('.number').textContent = `${number1} + ${number2}`
    document.querySelector('.bignum').value = number_choosen

}

biggest_number_rest()

// change big number EventListener
document.querySelector('.big_na').addEventListener('click', function(){
    number_choosen = Number(document.querySelector('.bignum').value)
    if (number_choosen >100 || !number_choosen || number_choosen > 100){
        document.querySelector('.message').textContent = "biggest number Must be between 1 to 100"
    }else{
        biggest_number_rest()
    }
})


// check the answear EventListener

document.querySelector('.check').addEventListener('click', function(){
   const answear = Number(document.querySelector('.answear').value)
   if (!answear|| answear <= 0 ){
    document.querySelector('.message').textContent = "Number Must be Bigger than 1"
   } else if ( (number1 + number2 === answear) ){
    document.querySelector('.message').textContent = `Correct !!!!!`
    document.querySelector('body').style.backgroundColor = "#60b347"
    biggest_number_rest()
    document.querySelector('.answear').value = ""
    document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) +1;
   } 
   else{
    document.querySelector('.message').textContent = `Wrong !! Try again`
    document.querySelector('body').style.backgroundColor = "#E7320B"
    biggest_number_rest()
    document.querySelector('.answear').value = ""
    if (Number( document.querySelector('.highscore').textContent) < Number(document.querySelector('.score').textContent)){
        document.querySelector('.highscore').textContent =  document.querySelector('.score').textContent
    }
    document.querySelector('.score').textContent = 0
   }
}) 

// try again butto 
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 0
    document.querySelector('.message').textContent = `Answear `
    biggest_number_rest()
    document.querySelector('body').style.backgroundColor = "#222"
})


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let modal_text = document.querySelector('.modal_text')
const openModal = function () {
  modal_text.textContent = `${number1} + ${number2}  = ${number1 + number2}`
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// a way to add event listener 
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
