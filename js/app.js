const alterarStatus = (id) => {
    let gameClicado = document.getElementById(`game-${id}`);
    let gameImagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (gameImagem.classList.contains("dashboard__item__img--rented")) {
        gameImagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar";
    } else {
        gameImagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    }
}