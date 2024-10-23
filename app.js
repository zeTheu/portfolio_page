const botaoCurriculo = document.getElementById("btnClick");
const botaoModal = document.getElementById("btnAbrirModal");
const modal = document.getElementById("dialog");
const botaoFecharModal = document.getElementById("btnSair");

botaoModal.onclick = function() {
  modal.showModal()
}

botaoFecharModal.onclick = function() {
  modal.close()
}

botaoCurriculo.addEventListener("click", downloadcv);

function downloadcv() {
  window.open("https://github.com");
}
