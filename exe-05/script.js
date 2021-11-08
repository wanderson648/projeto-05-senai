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
  let vPermitida = Number(document.querySelector('.estrada').value);
  const vMotorista = Number(document.querySelector('.motorista').value);

  if(!vPermitida || vMotorista < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()
    let vConsiderada = vPermitida + (vPermitida * 0.2);
    

    console.log(vConsiderada, vPermitida);


    if(vMotorista <= vPermitida) {
      modal.style.fontSize = '30px';
      modal.style.color = 'green';

      modal.textContent = 'Sem multa';
    } 
    else if(vMotorista > vPermitida && vMotorista <= vConsiderada) {
      modal.style.fontSize = '30px';
      modal.style.color = 'orange';

      modal.textContent = 'Multa leve';
    } 
    else if(vMotorista > vConsiderada){
      modal.style.fontSize = '30px';
      modal.style.color = 'red';
      modal.textContent = 'Multa grave';
    }
  }
});












