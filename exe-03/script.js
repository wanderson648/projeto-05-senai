'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = ()=> {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = ()=> {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event)=> {
  if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})




// pegando os valores de input
document.querySelector('.check').addEventListener('click', ()=> {
  const numero = Number(document.querySelector('.number').value);

  if(!numero || numero < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()
    if(numero % 2 ===0) {
      modal.style.fontSize = '16px';
      modal.textContent = 'NÚMERO PAR'
    } else if (numero % 2 === 1){
      modal.style.fontSize = '16px';
      modal.textContent = 'NÚMERO IMPAR'
    }
   
  }

  
});












