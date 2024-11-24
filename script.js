const twilightButton = document.getElementById("magic");
const fluttershyButton = document.getElementById("kindness");
const pinkiepieButton = document.getElementById("laughter");
const rainbowdashButton = document.getElementById("loyalty");
const rarityButton = document.getElementById("generosity");
const applejackButton = document.getElementById("honesty");

const twilightPic = document.getElementById("twilight-pic");
const fluttershyPic = document.getElementById("fluttershy-pic");
const pinkiepiePic = document.getElementById("pinkiepie-pic");
const rainbowdashPic = document.getElementById("rainbowdash-pic");
const rarityPic = document.getElementById("rarity-pic");
const applejackPic = document.getElementById("applejack-pic");

const ponyDescription = document.getElementById("pony-description");

twilightPic.addEventListener("mouseenter", () => {
    twilightPic.style.border = "solid cyan 1px";
    document.body.style.backgroundColor = "blueviolet";
    ponyDescription.style.border = "solid white 2px";
    ponyDescription.textContent = "Твайлайт Спаркл - умная и дисциплинированная пони, которая отправляется в Понивиль, чтобы изучать магию дружбы по просьбе принцессы Селестии. Она отличается своим интеллектом, любовью к книгам и организованностью.";
});
twilightPic.addEventListener("mouseleave", () => {
    twilightPic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});

fluttershyPic.addEventListener("mouseenter", () => {
    fluttershyPic.style.border = "solid cyan 1px";
    document.body.style.backgroundColor = "rgb(255, 255, 108)";
    ponyDescription.style.border = "solid white 2px";
    ponyDescription.textContent = "Флаттершай - застенчивая и добрая пони, которая обожает животных и природу. Она умеет находить общий язык даже с самыми опасными существами. Её мягкость и сострадание символизируют доброту, а в трудные моменты она может проявить скрытую храбрость.";
});
fluttershyPic.addEventListener("mouseleave", () => {
    fluttershyPic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});

pinkiepiePic.addEventListener("mouseenter", () => {
    pinkiepiePic.style.border = "solid cyan 1px";
    ponyDescription.style.border = "solid white 2px";
    document.body.style.backgroundColor = "palevioletred";
    ponyDescription.textContent = "Пинки Пай - весёлая и эксцентричная пони, которая любит устраивать вечеринки и радовать окружающих. Её энергия и оптимизм заразительны, а чувство юмора и креативность помогают друзьям в сложных ситуациях. Она символизирует смех и позитивное отношение к жизни.";
});
pinkiepiePic.addEventListener("mouseleave", () => {
    pinkiepiePic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});

rainbowdashPic.addEventListener("mouseenter", () => {
    rainbowdashPic.style.border = "solid cyan 1px";
    ponyDescription.style.border = "solid white 2px";
    document.body.style.backgroundColor = "skyblue";
    ponyDescription.textContent = "Рэйнбоу Дэш - энергичная и амбициозная пони, мечтающая вступить в элитную группу лётчиков 'Вандерболт'. Она обожает скорость, смелость и приключения. Хотя иногда ей не хватает терпения, её верность и готовность постоять за друзей не знают границ.";
});
rainbowdashPic.addEventListener("mouseleave", () => {
    rainbowdashPic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});

rarityPic.addEventListener("mouseenter", () => {
    rarityPic.style.border = "solid cyan 1px";
    document.body.style.backgroundColor = "whitesmoke";
    ponyDescription.style.border = "solid white 2px";
    ponyDescription.textContent = "Рэрити - утончённая и креативная пони, которая занимается дизайном одежды. Она известна своим изысканным вкусом и готовностью помогать друзьям, даже если это мешает её работе. Её доброта и забота о красоте вокруг символизируют щедрость.";
});
rarityPic.addEventListener("mouseleave", () => {
    rarityPic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});

applejackPic.addEventListener("mouseenter", () => {
    applejackPic.style.border = "solid cyan 1px";
    document.body.style.backgroundColor = "rgb(255, 193, 78)";
    ponyDescription.style.border = "solid white 2px";
    ponyDescription.textContent = "Эпплджек - честная и трудолюбивая пони из фермерской семьи. Она помогает управлять яблочной фермой 'Сладкое яблоко' вместе с семьёй. Эпплджек символизирует честность, всегда готова помочь своим друзьям и ценит простоту и семейные традиции.";
});
applejackPic.addEventListener("mouseleave", () => {
    applejackPic.style.border = "solid skyblue 1px";
    ponyDescription.style.border = "none";
    document.body.style.backgroundColor = "white";
    ponyDescription.textContent = "";
});
