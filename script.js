document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  const aumentar = document.getElementById('aumentar-fonte');
  const diminuir = document.getElementById('diminuir-fonte');

  let tamanhoFonte = 100;

  aumentar.addEventListener('click', function () {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + '%';
  });

  diminuir.addEventListener('click', function () {
    tamanhoFonte -= 10;
    if (tamanhoFonte >= 50) {
      document.body.style.fontSize = tamanhoFonte + '%';
    }
  });
});
