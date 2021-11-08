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
  let valorSaque = Number(document.querySelector('.saque').value);

  if(!valorSaque || valorSaque < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()
    
    if(valorSaque % 10 === 0) {
      let nota100, nota50, nota10, resto = valorSaque;

      nota100 = parseInt(resto / 100);
      resto = resto % 100;

      nota50 = parseInt(resto / 50);
      resto = resto % 50;
      
      nota10 = parseInt(resto / 10);
      resto = resto % 10;


      modal.style.fontSize = '20px';
      modal.style.color = 'black';

      modal.innerHTML = `
        Valor inserido ${valorSaque}<br>
        ${nota100} notas(s) de 100<br>
        ${nota50} notas(s) de 50<br>
        ${nota10} notas(s) de 10<br>
      `
    } else {
      modal.style.fontSize = '20px';
      modal.style.color = 'red';
      modal.textContent = "Valor indisponível";
    }
  }
});












