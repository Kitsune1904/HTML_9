let solarSystem = document.getElementById("solarSystem");

let sun = document.getElementById("sunStar");
let mercury = document.getElementById("mercuryPlanet");
let venus = document.getElementById("venusPlanet");
let earth = document.getElementById("earthPlanet");
let mars = document.getElementById("marsPlanet");
let jupiter = document.getElementById("jupiterPlanet");
let saturn = document.getElementById("saturnPlanet");
let uranus = document.getElementById("uranusPlanet");
let neptune = document.getElementById("neptunePlanet");

let sunInfo = document.getElementById("sunInfo");
let mercuryInfo = document.getElementById("mercuryInfo");
let venusInfo = document.getElementById("venusInfo");
let earthInfo = document.getElementById("earthInfo");
let marsInfo = document.getElementById("marsInfo");
let jupiterInfo = document.getElementById("jupiterInfo");
let saturnInfo = document.getElementById("saturnInfo");
let uranusInfo = document.getElementById("uranusInfo");
let neptuneInfo = document.getElementById("neptuneInfo");

let sunBtn = document.getElementById("backSun");
let mercuryBtn = document.getElementById("backMercury");
let venusBtn = document.getElementById("backVenus");
let earthBtn = document.getElementById("backEarth");
let marsBtn = document.getElementById("backMars");
let jupiterBtn = document.getElementById("backJupiter");
let saturnBtn = document.getElementById("backSaturn");
let uranusBtn = document.getElementById("backUranus");
let neptuneBtn = document.getElementById("neptuneVenus");

sun.addEventListener("click", () => {
  solarSystem.style.visibility = "hidden";
  sunInfo.style.display = "flex";
});
sunBtn.addEventListener("click", () => {
  solarSystem.style.visibility = "visible";
  sunInfo.style.display = "none";
});

mercury.addEventListener("click", () => {
  solarSystem.style.visibility = "hidden";
  mercuryInfo.style.display = "flex";
});
mercuryBtn.addEventListener("click", () => {
  solarSystem.style.visibility = "visible";
  mercuryInfo.style.display = "none";
});

venus.addEventListener("click", () => {
    solarSystem.style.visibility = "hidden";
    venusInfo.style.display = "flex";
  });
  venusBtn.addEventListener("click", () => {
    solarSystem.style.visibility = "visible";
    venusInfo.style.display = "none";
  });