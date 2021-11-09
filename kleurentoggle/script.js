const openMenu = function () {
    let x = document.getElementById("chooseColor");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };
};

const closeMenu = function () {
    let y = document.getElementById("chooseColor");
    if (y.style.display === "none") {
        y.style.display = "block"
    } else {
        y.style.display = "none";
    };
};

const colorWhite = document.querySelector(".witAchtergrond");
const colorBlue = document.getElementById("blauw");
const colorGreen = document.getElementById("groen");
const colorPurple = document.getElementById("paars");
const colorPink = document.getElementById("roze");
const colorRed = document.getElementById("rood");
const colorHome = document.getElementById("home");
const clickIcon = document.querySelector(".icon");

const changeBlue = () => {
    if (blauw = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("blauwAchtergrond");
        closeMenu();
    };
};

const changeGreen = () => {
    if (green = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("groenAchtergrond");
        closeMenu();
    };
};

const changePurple = () => {
    if (paars = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("paarsAchtergrond");
        closeMenu();
    };
};

const changePink = () => {
    if (roze = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("rozeAchtergrond");
        closeMenu();
    };
};

const changeRed = () => {
    if (rood = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("roodAchtergrond");
        closeMenu();
    };
};

const changeHome = () => {
    if (home = true) {
        colorWhite.removeAttribute("class");
        colorWhite.classList.add("witAchtergrond");
        closeMenu();
    };
};

colorBlue.addEventListener('click', changeBlue);
colorGreen.addEventListener('click', changeGreen);
colorPurple.addEventListener('click', changePurple);
colorPink.addEventListener('click', changePink);
colorRed.addEventListener('click', changeRed);
colorHome.addEventListener('click', changeHome);