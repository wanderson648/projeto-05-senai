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
  let preco = Number(document.querySelector('.preco').value);
  const nome = document.querySelector('.nome').value;
  const qtd = Number(document.querySelector('.qtd').value);


  if(!preco || !nome || preco < 0) {
    alert('Entrada inválida!')
  } 
  else {
    openModal()

    let desconto  = preco * (1-0.4);

    if(qtd === 2) {
      preco += desconto;
    } else {
      preco *= qtd
    }

    document.querySelector('.modal').innerHTML = `${qtd} ${nome} a custa R$ ${preco} e levando ${qtd} por apenas R$ ${preco}` 


    document.querySelector('.modal').style.fontSize = '30px';
  }
});












