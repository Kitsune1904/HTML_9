let solarSystem = document.getElementById("solarSystem");
let toDo = document.getElementById("toDo");

let sun = document.getElementById("sunStar");
let mercury = document.getElementById("mercuryPlanet");
let venus = document.getElementById("venusPlanet");
let earth = document.getElementById("earthPlanet");
let mars = document.getElementById("marsPlanet");
let jupiter = document.getElementById("jupiterPlanet");
let saturn = document.getElementById("saturnPlanet");
let uranus = document.getElementById("uranusPlanet");
let neptune = document.getElementById("neptunePlanet");
let pluto = document.getElementById("plutoPlanet");

let sunInfo = document.getElementById("sunInfo");
let mercuryInfo = document.getElementById("mercuryInfo");
let venusInfo = document.getElementById("venusInfo");
let earthInfo = document.getElementById("earthInfo");
let marsInfo = document.getElementById("marsInfo");
let jupiterInfo = document.getElementById("jupiterInfo");
let saturnInfo = document.getElementById("saturnInfo");
let uranusInfo = document.getElementById("uranusInfo");
let neptuneInfo = document.getElementById("neptuneInfo");
let plutoInfo = document.getElementById("plutoInfo");

let sunBtn = document.getElementById("backSun");
let mercuryBtn = document.getElementById("backMercury");
let venusBtn = document.getElementById("backVenus");
let earthBtn = document.getElementById("backEarth");
let marsBtn = document.getElementById("backMars");
let jupiterBtn = document.getElementById("backJupiter");
let saturnBtn = document.getElementById("backSaturn");
let uranusBtn = document.getElementById("backUranus");
let neptuneBtn = document.getElementById("backNeptune");
let plutoBtn = document.getElementById("backPluto");

const hideOrShow = (state) => {
  if (state === "hide") {
    solarSystem.style.visibility = "hidden";
    toDo.style.visibility = "hidden";
  } else if (state === "show") {
    solarSystem.style.visibility = "visible";
    toDo.style.visibility = "visible";
  }
};

sun.addEventListener("click", () => {
  hideOrShow("hide");
  sunInfo.style.display = "flex";
});
sunBtn.addEventListener("click", () => {
  hideOrShow("show");
  sunInfo.style.display = "none";
});

mercury.addEventListener("click", () => {
  hideOrShow("hide");
  mercuryInfo.style.display = "flex";
});
mercuryBtn.addEventListener("click", () => {
  hideOrShow("show");
  mercuryInfo.style.display = "none";
});

venus.addEventListener("click", () => {
  hideOrShow("hide");
  venusInfo.style.display = "flex";
});
venusBtn.addEventListener("click", () => {
  hideOrShow("show");
  venusInfo.style.display = "none";
});

earth.addEventListener("click", () => {
  hideOrShow("hide");
  earthInfo.style.display = "flex";
});
earthBtn.addEventListener("click", () => {
  hideOrShow("show");
  earthInfo.style.display = "none";
});

mars.addEventListener("click", () => {
  hideOrShow("hide");
  marsInfo.style.display = "flex";
});
marsBtn.addEventListener("click", () => {
  hideOrShow("show");
  marsInfo.style.display = "none";
});

jupiter.addEventListener("click", () => {
  hideOrShow("hide");
  jupiterInfo.style.display = "flex";
});
jupiterBtn.addEventListener("click", () => {
  hideOrShow("show");
  jupiterInfo.style.display = "none";
});

saturn.addEventListener("click", () => {
  hideOrShow("hide");
  saturnInfo.style.display = "flex";
});
saturnBtn.addEventListener("click", () => {
  hideOrShow("show");
  saturnInfo.style.display = "none";
});

uranus.addEventListener("click", () => {
  hideOrShow("hide");
  uranusInfo.style.display = "flex";
});
uranusBtn.addEventListener("click", () => {
  hideOrShow("show");
  uranusInfo.style.display = "none";
});

neptune.addEventListener("click", () => {
  hideOrShow("hide");
  neptuneInfo.style.display = "flex";
});
neptuneBtn.addEventListener("click", () => {
  hideOrShow("show");
  neptuneInfo.style.display = "none";
});

pluto.addEventListener("click", () => {
  hideOrShow("hide");
  plutoInfo.style.display = "flex";
});
plutoBtn.addEventListener("click", () => {
  hideOrShow("show");
  plutoInfo.style.display = "none";
});
