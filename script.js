`use strict`;

const btn_adicionar = document.querySelector("#adicionar");
const btn_excluir = document.querySelector("#excluir");

const tabela = document.querySelector("#tabela");
const tabela_body = document.querySelector("#body");

const modal_adicionar = document.querySelector("#modal-adicionar");
const modal_adicionar_btn_confirmar = document.querySelector(
  "#modal-adicionar-confirmar"
);
const modal_adicionar_btn_cancelar = document.querySelector(
  "#modal-adicionar-cancelar"
);
const modal_adicionar_nome = document.querySelector("#nome");
const modal_adicionar_tipo = document.querySelector("#tipo");
const modal_adicionar_detalhes = document.querySelector("#detalhes");

const modal_excluir = document.querySelector("#modal-excluir");
const modal_excluir_btn_confirmar = document.querySelector(
  "#modal-excluir-confirmar"
);
const modal_excluir_btn_cancelar = document.querySelector(
  "#modal-excluir-cancelar"
);
const modal_excluir_id = document.querySelector("#id");

// Variáveis que irão ser usadas para a tabela em si
const dados_tabela = [];
let dados_linha = {};

// Função para fechar modais
function mostrar_modal(display = "none", option = 0) {
  if (option == 0) {
    modal_adicionar.style.display = display;
  } else {
    modal_excluir.style.display = display;
  }
}

// Botão que vai abrir modal que irá adicionar item a lista
btn_adicionar.addEventListener("click", function () {
  mostrar_modal("block");
});

// Botão para cancelar adição de item a lista
modal_adicionar_btn_cancelar.addEventListener("click", function () {
  mostrar_modal();
});

// Botão que vai abrir modal que irá excluir item da lista
btn_excluir.addEventListener("click", function () {
  mostrar_modal("block", 1);
});

// Botão para cancelar exclusão de item da lista
modal_excluir_btn_cancelar.addEventListener("click", function () {
  mostrar_modal("none", 1);
});

// Função para fechar modal quando clicar fora dele
window.addEventListener("click", function (event) {
  if (event.target == modal_adicionar) {
    mostrar_modal();
  } else if (event.target == modal_excluir) {
    mostrar_modal("none", 1);
  }
});

// Botão do modal que vai adicionar os dados a tabela
modal_adicionar_btn_confirmar.addEventListener("click", function () {
  tabela_body.innerHTML = "";

  dados_linha.id = Date.now();
  dados_linha.nome = modal_adicionar_nome.value;
  dados_linha.tipo = modal_adicionar_tipo.value;
  dados_linha.detalhes = modal_adicionar_detalhes.value;
  dados_linha.data = new Date().toLocaleDateString();

  dados_tabela.push({ ...dados_linha });

  dados_tabela.forEach(function (thing) {
    let row = tabela_body.insertRow(-1);

    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell0.innerHTML = thing.id;
    cell1.innerHTML = thing.nome;
    cell2.innerHTML = thing.tipo;
    cell3.innerHTML = thing.detalhes;
    cell4.innerHTML = thing.data;
  });
});
