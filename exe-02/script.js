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
  const tempoCliente = Number(document.querySelector('.tempo').value);
  const preco = Number(document.querySelector('.preco').value);

  if(!tempoCliente ||  !preco || preco < 0 || tempoCliente < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()
    let tempo = tempoCliente / 15;
    let total = 0;
   
    if(tempo % 2 !== 0 && tempo % 2 !== 1) {
      total = (parseInt(tempo) * preco) + preco;
    } 
    else {
      total = parseInt(tempo) * preco;
    }

    document.querySelector('.modal').textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    document.querySelector('.modal').style.fontSize = '30px';     
  }
});












