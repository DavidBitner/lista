`use strict`;

const btn_adicionar = document.querySelector("#adicionar");
const btn_excluir = document.querySelector("#excluir");

const tabela = document.querySelector("#tabela");

const modal_adicionar = document.querySelector("#modal-adicionar");
const modal_adicionar_btn_confirmar = document.querySelector(
  "#modal-adicionar-confirmar"
);
const modal_adicionar_btn_cancelar = document.querySelector(
  "#modal-adicionar-cancelar"
);

const modal_excluir = document.querySelector("#modal-excluir");
const modal_excluir_btn_confirmar = document.querySelector(
  "#modal-excluir-confirmar"
);
const modal_excluir_btn_cancelar = document.querySelector(
  "#modal-excluir-cancelar"
);

// modal_btn_cancelar.style.backgroundColor = "white";

// Botão que vai abrir modal que irá adicionar item a lista
btn_adicionar.addEventListener("click", function () {
  modal_adicionar.style.display = "block";
});

// Botão para cancelar adição de item a lista
modal_adicionar_btn_cancelar.addEventListener("click", function () {
  modal_adicionar.style.display = "none";
});

// Botão que vai abrir modal que irá excluir item da lista
btn_excluir.addEventListener("click", function () {
  modal_excluir.style.display = "block";
});

// Botão para cancelar exclusão de item da lista
modal_excluir_btn_cancelar.addEventListener("click", function () {
  modal_excluir.style.display = "none";
});

// Função para fechar modal quando clicar fora dele
window.addEventListener("click", function (event) {
  if (event.target == modal_adicionar) {
    modal_adicionar.style.display = "none";
  } else if (event.target == modal_excluir) {
    modal_excluir.style.display = "none";
  }
});
