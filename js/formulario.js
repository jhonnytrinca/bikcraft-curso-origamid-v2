const formulario = document.querySelector('form');

function envioForm(event) {
  event.preventDefault();
  const botao = document.querySelectorAll('form button');
  botao.disabled = true;
  window.alert('Envio de formulário não habilitado!');
}

formulario.addEventListener('submit', envioForm);
