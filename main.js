const solarSystem = document.getElementById("solarSystem");
const toDo = document.getElementById("toDo");

const sun = document.getElementById("sunStar");
const mercury = document.getElementById("mercuryPlanet");
const venus = document.getElementById("venusPlanet");
const earth = document.getElementById("earthPlanet");
const mars = document.getElementById("marsPlanet");
const jupiter = document.getElementById("jupiterPlanet");
const saturn = document.getElementById("saturnPlanet");
const uranus = document.getElementById("uranusPlanet");
const neptune = document.getElementById("neptunePlanet");
const pluto = document.getElementById("plutoPlanet");

const sunInfo = document.getElementById("sunInfo");
const mercuryInfo = document.getElementById("mercuryInfo");
const venusInfo = document.getElementById("venusInfo");
const earthInfo = document.getElementById("earthInfo");
const marsInfo = document.getElementById("marsInfo");
const jupiterInfo = document.getElementById("jupiterInfo");
const saturnInfo = document.getElementById("saturnInfo");
const uranusInfo = document.getElementById("uranusInfo");
const neptuneInfo = document.getElementById("neptuneInfo");
const plutoInfo = document.getElementById("plutoInfo");

const sunBtn = document.getElementById("backSun");
const mercuryBtn = document.getElementById("backMercury");
const venusBtn = document.getElementById("backVenus");
const earthBtn = document.getElementById("backEarth");
const marsBtn = document.getElementById("backMars");
const jupiterBtn = document.getElementById("backJupiter");
const saturnBtn = document.getElementById("backSaturn");
const uranusBtn = document.getElementById("backUranus");
const neptuneBtn = document.getElementById("backNeptune");
const plutoBtn = document.getElementById("backPluto");

const hideOrShow = (state, info) => {
  if (state === "hide") {
    solarSystem.style.visibility = "hidden";
    toDo.style.visibility = "hidden";
    info.style.display = "flex";
    sun.style.transition = "0s";
  } else if (state === "show") {
    solarSystem.style.visibility = "visible";
    toDo.style.visibility = "visible";
    info.style.display = "none";
    sun.style.transition = "1s";
  }
};

sun.addEventListener("click", () => hideOrShow("hide", sunInfo));
sunBtn.addEventListener("click", () => hideOrShow("show", sunInfo));

mercury.addEventListener("click", () => hideOrShow("hide", mercuryInfo));
mercuryBtn.addEventListener("click", () => hideOrShow("show", mercuryInfo));

venus.addEventListener("click", () => hideOrShow("hide", venusInfo));
venusBtn.addEventListener("click", () => hideOrShow("show", venusInfo));

earth.addEventListener("click", () => hideOrShow("hide", earthInfo));
earthBtn.addEventListener("click", () => hideOrShow("show", earthInfo));

mars.addEventListener("click", () => hideOrShow("hide", marsInfo));
marsBtn.addEventListener("click", () => hideOrShow("show", marsInfo));

jupiter.addEventListener("click", () => hideOrShow("hide", jupiterInfo))
jupiterBtn.addEventListener("click", () => hideOrShow("show", jupiterInfo));

saturn.addEventListener("click", () => hideOrShow("hide", saturnInfo))
saturnBtn.addEventListener("click", () =>  hideOrShow("show", saturnInfo))

uranus.addEventListener("click", () => hideOrShow("hide", uranusInfo))
uranusBtn.addEventListener("click", () => hideOrShow("show", uranusInfo))

neptune.addEventListener("click", () => hideOrShow("hide", neptuneInfo))
neptuneBtn.addEventListener("click", () => hideOrShow("show", neptuneInfo))

pluto.addEventListener("click", () => hideOrShow("hide", plutoInfo))
plutoBtn.addEventListener("click", () => hideOrShow("show", plutoInfo))
