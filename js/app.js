const alterarStatus = (gameAction) => {
    gameAction.addEventListener("click", () => {
        if (gameAction.innerHTML === "Alugar") {
            gameAction.innerHTML = "Devolver";
            gameAction.classList.add("dashboard__item__button--return");
            return;
        } else if (gameAction.innerHTML === "Devolver") {
            gameAction.innerHTML = "Alugar";
            gameAction.classList.remove("dashboard__item__button--return");
            return;
        }

    });
}

let gameUmAction = document.getElementById("game-1-action");
let gameDoisAction = document.getElementById("game-2-action");
let gameTresAction = document.getElementById("game-3-action");

alterarStatus(gameUmAction);
alterarStatus(gameDoisAction);
alterarStatus(gameTresAction);