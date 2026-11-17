let tg = window.Telegram.WebApp;
tg.expand();

const BRANDS = {
    ford:    { name: "Ford",    img: "botphoto/ford.png" },
    renault: { name: "Renault", img: "botphoto/renault.png" },
    lada:    { name: "Lada",    img: "botphoto/lada.png" },
    toyota:  { name: "Toyota",  img: "botphoto/toyota.png" },
    kia:     { name: "Kia",     img: "botphoto/kia.png" },
    hyundai: { name: "Hyundai", img: "botphoto/hyundai.png" },
};

const MODELS = {
    ford: [
        { id: "ford_focus",    name: "Focus",    img: "botphoto/focus.png" },
        { id: "ford_mustang",  name: "Mustang",  img: "botphoto/mustang.png" },
        { id: "ford_f150",     name: "F-150",    img: "botphoto/f150.png" },
        { id: "ford_explorer", name: "Explorer", img: "botphoto/explorer.png" },
    ],
    renault: [
        { id: "renault_duster", name: "Duster", img: "botphoto/duster.png" },
        { id: "renault_kaptur", name: "Kaptur", img: "botphoto/kaptur.png" },
        { id: "renault_arkana", name: "Arkana", img: "botphoto/arkana.png" },
        { id: "renault_koleos", name: "Koleos", img: "botphoto/koleos.png" },
    ],
    lada: [
        { id: "lada_2101",  name: "ВАЗ-2101", img: "botphoto/2101.png" },
        { id: "lada_granta", name: "Granta",  img: "botphoto/granta.png" },
        { id: "lada_vesta",  name: "Vesta",   img: "botphoto/vesta.png" },
        { id: "lada_niva",   name: "Niva",    img: "botphoto/niva.png" },
    ],
    toyota: [
        { id: "toyota_corolla",     name: "Corolla",      img: "botphoto/corolla.png" },
        { id: "toyota_camry",       name: "Camry",        img: "botphoto/camry.png" },
        { id: "toyota_landcruiser", name: "Land Cruiser", img: "botphoto/landcruiser.png" },
        { id: "toyota_prius",       name: "Prius",        img: "botphoto/prius.png" },
    ],
    kia: [
        { id: "kia_rio",      name: "Rio",      img: "botphoto/rio.png" },
        { id: "kia_sportage", name: "Sportage", img: "botphoto/sportage.png" },
        { id: "kia_sorento",  name: "Sorento",  img: "botphoto/sorento.png" },
        { id: "kia_k5",       name: "K5",       img: "botphoto/k5.png" },
    ],
    hyundai: [
        { id: "hyundai_solaris", name: "Solaris",  img: "botphoto/solaris.png" },
        { id: "hyundai_creta",   name: "Creta",    img: "botphoto/creta.png" },
        { id: "hyundai_tucson",  name: "Tucson",   img: "botphoto/tucson.png" },
        { id: "hyundai_santafe", name: "Santa Fe", img: "botphoto/santafe.png" },
    ],
};

// ===== НАВИГАЦИЯ =====
const screenBrands = document.getElementById("screen-brands");
const screenModels = document.getElementById("screen-models");
const brandsGrid   = document.getElementById("brands-grid");
const modelsGrid   = document.getElementById("models-grid");
const modelsTitle  = document.getElementById("models-title");

function showScreen(screen) {
    [screenBrands, screenModels].forEach(s => s.classList.add("hidden"));
    screen.classList.remove("hidden");
}

function renderBrands() {
    brandsGrid.innerHTML = "";
    Object.keys(BRANDS).forEach(key => {
        const b = BRANDS[key];
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="${b.img}" alt="${b.name}" class="img">
            <button class="btn">${b.name}</button>
        `;
        div.addEventListener("click", () => openBrand(key));
        brandsGrid.appendChild(div);
    });
}

function openBrand(brandKey) {
    modelsTitle.textContent = "Модели " + BRANDS[brandKey].name;
    modelsGrid.innerHTML = "";
    MODELS[brandKey].forEach(m => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="${m.img}" alt="${m.name}" class="img">
            <button class="btn">${m.name}</button>
        `;
        // Выбор модели → отправляем id в бота и закрываем Web App
        div.addEventListener("click", () => {
            tg.sendData(m.id);
        });
        modelsGrid.appendChild(div);
    });
    showScreen(screenModels);
}

document.getElementById("back-to-brands").addEventListener("click", () => showScreen(screenBrands));

// ===== СТАРТ =====
renderBrands();
showScreen(screenBrands);
