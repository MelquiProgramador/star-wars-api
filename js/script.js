const limit = 2;
const url = `https://swapi.dev/api/people/?page=${limit}`;

function convertPersonagemToList(personagem, index) {
    return `
        <li class="personagem" data-index="${index}">
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
                <button class="vermais" onclick="verMais(${index})">Ver Mais</button>
            </div>
            <div class="info-adicional" id="info-${index}">
                <!-- Informações adicionais serão inseridas aqui -->
            </div>
        </li>
    `;
}

function convertInfoToList(personagem) {
    return `
        <div class="div-altura-valor">
            <div class="altura">Cor do Cabelo:</div>
            <div class="altura-valor">${personagem.hair_color}</div>
        </div>
        <div class="div-peso-valor">
            <div class="peso">Cor da Pele:</div>
            <div class="peso-valor">${personagem.skin_color}</div>
        </div>
        <div class="div-genero-valor">
            <div class="genero">Cor do Olho:</div>
            <div class="genero-valor">${personagem.eye_color}</div>
        </div>
    `;
}

function verMais(index) {
    const infoElement = document.getElementById(`info-${index}`);
    if (infoElement.style.display === 'none' || infoElement.style.display === '') {
        // Mostrar informações adicionais
        infoElement.innerHTML = convertInfoToList(personagens[index]);
        infoElement.style.display = 'block';
    } else {
        // Ocultar informações adicionais
        infoElement.style.display = 'none';
    }
}

const listaPersonagemElement = document.getElementById("lista-personagem");
let personagens = [];

fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(list => {
        personagens = list; // Armazena os personagens para uso posterior
        list.forEach((personagem, index) => {
            const personagemHTML = convertPersonagemToList(personagem, index);
            listaPersonagemElement.innerHTML += personagemHTML; 
        });
    })
    .catch(error => console.error("Erro ao carregar os dados:", error));
