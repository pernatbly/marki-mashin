let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

const brands = {
    btn_ford:    { item: "brand_ford",    text: "Вывести модели Ford" },
    btn_renault: { item: "brand_renault", text: "Вывести модели Renault" },
    btn_lada:    { item: "brand_lada",    text: "Вывести модели Lada" },
    btn_toyota:  { item: "brand_toyota",  text: "Вывести модели Toyota" },
    btn_kia:     { item: "brand_kia",     text: "Вывести модели Kia" },
    btn_hyundai: { item: "brand_hyundai", text: "Вывести модели Hyundai" },
};

Object.keys(brands).forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", function () {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setText(brands[id].text);
            item = brands[id].item;
            tg.MainButton.show();
        }
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});
