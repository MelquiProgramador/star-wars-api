const limit = 2;
const url = `https://swapi.dev/api/people/?page=${limit}`; // O limite de resultados por página na API é fixo, então podemos paginar assim.

function convertPersonagemToList(personagem, index) {
    return `
        <li class="personagem">
            <div class="numero-e-nome">
                <div class="nome">${personagem.name}</div>
                <div class="numero">#${index + 1}</div>
            </div>
            <div class="div-altura-valor">
                <div class="altura">Altura:</div>
                <div class="altura-valor">${personagem.height}</div>
            </div>
            <div class="div-peso-valor">
                <div class="peso">Peso:</div>
                <div class="peso-valor">${personagem.mass}</div>
            </div>
            <div class="div-genero-valor">
                <div class="genero">Gênero:</div>
                <div class="genero-valor">${personagem.gender}</div>
            </div>
            <div class="botao-personagem">

            <button class="vermais" href="">Ver Mais</button>
            
            </div>
        </li>
    `;
}

const listaPersonagemElement = document.getElementById("lista-personagem");

fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .then((list) => {
        list.forEach((personagem, index) => {
            const personagemHTML = convertPersonagemToList(personagem, index);
            listaPersonagemElement.innerHTML += personagemHTML;
        });
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
