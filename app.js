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
        { id: "ford_focus",    name: "Focus",    img: "botphoto/focus.png",
          desc: "Ford Focus — компактный автомобиль американского автопроизводителя Ford, который выпускался с 1998 по 2025 год. Модель стала настоящим хитом, особенно в России, где в 2010 году она стала самой продаваемой иномаркой." },
        { id: "ford_mustang",  name: "Mustang",  img: "botphoto/mustang.png",
          desc: "Ford Mustang — культовый автомобиль класса Pony Car (спортивное компактное купе с задним приводом), который выпускается компанией Ford Motor Company с 1964 года. На машине используется специальная эмблема Mustang, а не логотип Ford." },
        { id: "ford_f150",     name: "F-150",    img: "botphoto/f150.png",
          desc: "Ford F-150 — это полноразмерный рамный пикап, который компания Ford выпускает с 1975 года. Модель стала настоящим символом американского рынка пикапов и олицетворяет универсальность." },
        { id: "ford_explorer", name: "Explorer", img: "botphoto/explorer.png",
          desc: "Ford Explorer — это американский средне- или полноразмерный кроссовер (с 1 по 4 поколения — среднеразмерный внедорожник), который выпускается с 1990 года." },
    ],
    renault: [
        { id: "renault_duster",  name: "Duster",  img: "botphoto/duster.png",
          desc: "Renault Duster — это компактный кроссовер, название которого происходит от английского слова dust («пыль»). Модель разработана в техноцентре Renault в Гвианкуре и впервые представлена 8 декабря 2009 года." },
        { id: "renault_kaptur",  name: "Kaptur",  img: "botphoto/kaptur.png",
          desc: "Renault Kaptur (Каптюр) — субкомпактный кроссовер французской компании Renault, созданный специально для стран с развивающейся экономикой." },
        { id: "renault_arkana",  name: "Arkana",  img: "botphoto/arkana.png",
          desc: "Renault Arkana — это компактный кроссовер, который компания Renault представила в 2018 году, а серийное производство начала в 2019-м. Название происходит от латинского слова arcanum — «тайна»." },
        { id: "renault_koleos",  name: "Koleos",  img: "botphoto/koleos.png",
          desc: "Renault Koleos — это компактный кроссовер, который компания Renault разработала как первый полноценный SUV. Модель выпускается с 2008 года." },
    ],
    lada: [
        { id: "lada_2101",  name: "ВАЗ-2101", img: "botphoto/2101.png",
          desc: "ВАЗ-2101 «Жигули» — советский заднеприводный легковой автомобиль малого класса с кузовом типа седан, первая модель, выпущенная Волжским автомобильным заводом. В народе получил прозвище «копейка»." },
        { id: "lada_granta", name: "Granta",  img: "botphoto/granta.png",
          desc: "Lada Granta — это бюджетный переднеприводный автомобиль малого класса, разработанный АвтоВАЗом. Модель стала одним из бестселлеров на российском рынке." },
        { id: "lada_vesta",  name: "Vesta",   img: "botphoto/vesta.png",
          desc: "Lada Vesta — семейство российских автомобилей среднего класса, выпускаемых АвтоВАЗом с 25 сентября 2015 года в кузове седан, а с 2017 года — в кузове универсал." },
        { id: "lada_niva",   name: "Niva",    img: "botphoto/niva.png",
          desc: "Lada Niva — это легендарный советский и российский внедорожник малого класса с несущим кузовом и постоянным полным приводом. Серийное производство стартовало 5 апреля 1977 года." },
    ],
    toyota: [
        { id: "toyota_corolla",      name: "Corolla",      img: "botphoto/corolla.png",
          desc: "Toyota Corolla — это компактная модель C-класса, выпускаемая японской компанией Toyota с 1966 года. Одна из самых узнаваемых и продаваемых машин в мире." },
        { id: "toyota_camry",        name: "Camry",        img: "botphoto/camry.png",
          desc: "Toyota Camry — это популярный седан бизнес-класса от японского автопроизводителя Toyota. Модель выпускается с 1982 года. Название «Camry» означает «корона»." },
        { id: "toyota_landcruiser",  name: "Land Cruiser", img: "botphoto/landcruiser.png",
          desc: "Toyota Land Cruiser — это легендарный японский внедорожник, который выпускается с 1951 года. Модель заслужила мировую известность благодаря надёжности и проходимости." },
        { id: "toyota_prius",        name: "Prius",        img: "botphoto/prius.png",
          desc: "Toyota Prius — это первый в мире массовый гибридный автомобиль, который производит Toyota с 1997 года. Название происходит от латинского prius — «первый»." },
    ],
    kia: [
        { id: "kia_rio",      name: "Rio",      img: "botphoto/rio.png",
          desc: "Kia Rio — один из самых популярных в России компактных автомобилей класса B. Модель выпускается с 2000 года." },
        { id: "kia_sportage", name: "Sportage", img: "botphoto/sportage.png",
          desc: "Kia Sportage — это компактный кроссовер, который выпускается с 1993 года. За время существования модель сменила пять поколений." },
        { id: "kia_sorento",  name: "Sorento",  img: "botphoto/sorento.png",
          desc: "Kia Sorento — это среднеразмерный кроссовер от корейского автопроизводителя Kia Motors. Модель выпускается с 2002 года. Название происходит от итальянского города Сорренто." },
        { id: "kia_k5",       name: "K5",       img: "botphoto/k5.png",
          desc: "Kia K5 — седан бизнес-класса южнокорейской компании Kia Motors. В России модель представлена с 2020 года, заменив ранее именовавшийся Optima." },
    ],
    hyundai: [
        { id: "hyundai_solaris", name: "Solaris",  img: "botphoto/solaris.png",
          desc: "Hyundai Solaris — субкомпактный автомобиль B-класса, созданный Hyundai Motors специально для российского рынка. Локализованная версия Hyundai Accent четвёртого поколения." },
        { id: "hyundai_creta",   name: "Creta",    img: "botphoto/creta.png",
          desc: "Hyundai Creta — это компактный кроссовер, который стал одним из бестселлеров марки в России. Сочетает практичность для города и загородных поездок." },
        { id: "hyundai_tucson",  name: "Tucson",   img: "botphoto/tucson.png",
          desc: "Hyundai Tucson — это компактный кроссовер, который выпускается с 2004 года. Название получил в честь американского города Тусон (Аризона)." },
        { id: "hyundai_santafe", name: "Santa Fe", img: "botphoto/santafe.png",
          desc: "Hyundai Santa Fe — это среднеразмерный кроссовер, который выпускается с 2000 года. За это время модель прошла пять поколений." },
    ],
};

const screenBrands = document.getElementById("screen-brands");
const screenModels = document.getElementById("screen-models");
const screenCard   = document.getElementById("screen-card");
const brandsGrid   = document.getElementById("brands-grid");
const modelsGrid   = document.getElementById("models-grid");
const modelsTitle  = document.getElementById("models-title");

let currentBrand = null;

function showScreen(screen) {
    [screenBrands, screenModels, screenCard].forEach(s => s.classList.add("hidden"));
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
    currentBrand = brandKey;
    modelsTitle.textContent = "Модели " + BRANDS[brandKey].name;
    modelsGrid.innerHTML = "";
    MODELS[brandKey].forEach(m => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="${m.img}" alt="${m.name}" class="img">
            <button class="btn">${m.name}</button>
        `;
        div.addEventListener("click", () => openCard(m));
        modelsGrid.appendChild(div);
    });
    showScreen(screenModels);
}

function openCard(model) {
    document.getElementById("card-img").src   = model.img;
    document.getElementById("card-title").textContent = model.name;
    document.getElementById("card-desc").textContent  = model.desc;
    showScreen(screenCard);
}

document.getElementById("back-to-brands").addEventListener("click", () => showScreen(screenBrands));
document.getElementById("back-to-models").addEventListener("click", () => {
    openBrand(currentBrand);
});

renderBrands();
showScreen(screenBrands);
