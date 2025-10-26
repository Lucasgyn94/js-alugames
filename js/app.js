let jogosAlugados = 0;

/*
2. No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
*/
const quantidadeJogosAlugados = () => {
    console.log(`Quantidade de jogos alugados: ${jogosAlugados}`);
}

const alterarStatus = (id) => {
    let gameClicado = document.getElementById(`game-${id}`);
    let gameImagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (gameImagem.classList.contains("dashboard__item__img--rented")) {
        /*1. No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. Isso pode ajudar a evitar devoluções acidentais.
         */
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo}?`)) {
            gameImagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--;
            quantidadeJogosAlugados();

        }
    } else {
        gameImagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++;
        quantidadeJogosAlugados();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
    quantidadeJogosAlugados();
})



/*
DESAFIOS



*/