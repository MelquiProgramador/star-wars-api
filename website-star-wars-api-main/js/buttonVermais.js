const limit = 2;
const url = `https://swapi.dev/api/people/?page=${limit}`;


/* CODIGO DESTE ARQUIVO */

function verMais(element){
    element.style.color = "yellow"

    /* CODIGO DO SCRIPT JS */

function convertPersonagemToList(personagem, index) {
    return `
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
    `;
}

const listaPersonagemElement = document.getElementById("personagem");

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


    
}

