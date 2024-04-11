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
