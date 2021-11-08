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
  const preco = Number(document.querySelector('.preco').value);
  const peso = Number(document.querySelector('.peso').value);

  if(!preco || !peso || peso < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()
    let resultado = (preco * peso) / 1000;
  
    document.querySelector('.modal').textContent = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    document.querySelector('.modal').style.fontSize = '30px';
  }
});












