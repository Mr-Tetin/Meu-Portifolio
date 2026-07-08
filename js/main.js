function carregarProjetos() {
    const container = document.getElementById("listaProjetos");

    container.innerHTML = "";

    const salvos = localStorage.getItem("projetos");
    const listaFinal = salvos ? JSON.parse(salvos) : projetos;

    listaFinal.forEach(projeto => {
        const card = document.createElement("div");
        card.className = "card-projeto";
        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href = "${projeto.link}" target="_blank">Ver no GitHub</a>
        `;
        container.appendChild(card)
    });
}

document.addEventListener("DOMContentLoaded", carregarProjetos);