const resultado = document.getElementById("resultado");
const verTodosBtn = document.getElementById("ver-todos");
const filtrarBtn = document.getElementById("btn-filtrar");

// Función principal para mostrar personajes
function mostrarPersonajes(data) {
  resultado.innerHTML = ""; // Limpia resultados anteriores

    if (data.results && data.results.length > 0) {
    data.results.forEach(personaje => {
        const card = document.createElement("div");
        card.className = "personaje";

      // Traducciones de estado y género
        const estado = traducirEstado(personaje.status);
        const genero = traducirGenero(personaje.gender);

        card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
        <p><strong>Estado:</strong> ${estado}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Tipo:</strong> ${personaje.type || "No especificado"}</p>
        <p><strong>Género:</strong> ${genero}</p>`;
    resultado.appendChild(card);
    });
} else {
    resultado.innerHTML = `<p>No se encontraron personajes.</p>`;
    }
}

// Traducción de estados y géneros
function traducirEstado(estado) {
    const estados = {
    Alive: "Vivo",
    Dead: "Muerto",
    unknown: "Desconocido"
    };
    return estados[estado] || estado;
}

function traducirGenero(genero) {
    const generos = {
    Male: "Masculino",
    Female: "Femenino",
    Genderless: "Sin género",
    unknown: "Desconocido"
    };
    return generos[genero] || genero;
}

// Obtener todos los personajes
verTodosBtn.addEventListener("click", () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => mostrarPersonajes(data))
    .catch(error => {
        resultado.innerHTML = `<p class="error">❌ Error al obtener los personajes.</p>`;
    });
});

// Buscar con filtros
filtrarBtn.addEventListener("click", () => {
    const nombre = document.getElementById("filtro-nombre").value.trim();
    const estado = document.getElementById("filtro-estado").value.trim().toLowerCase();
    const especie = document.getElementById("filtro-especie").value.trim();
    const tipo = document.getElementById("filtro-tipo").value.trim();
    const genero = document.getElementById("filtro-genero").value.trim().toLowerCase();

    const query = new URLSearchParams();

    if (nombre) query.append("name", nombre);
    if (estado) query.append("status", estado);
    if (especie) query.append("species", especie);
    if (tipo) query.append("type", tipo);
    if (genero) query.append("gender", genero);

    fetch(`https://rickandmortyapi.com/api/character/?${query.toString()}`)
    .then(res => res.json())
    .then(data => mostrarPersonajes(data))
    .catch(error => {
        resultado.innerHTML = `<p class="error">❌ No se encontraron resultados o hubo un error.</p>`;
    });
});
