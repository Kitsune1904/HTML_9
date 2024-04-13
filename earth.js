const FAST = document.getElementById("FAST")
const VLT = document.getElementById("VLT")
const NAIC = document.getElementById("NAIC")
const Roque = document.getElementById("Roque")
const IAO = document.getElementById("IAO")
const RAN = document.getElementById("RAN")
const Keck = document.getElementById("Keck")

const mapRes = document.getElementById("map")

FAST.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9195.327537795238!2d106.85324025738407!3d25.65289310947985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36b8938807cfdc4f%3A0x53472359016238f4!2sFAST!5e1!3m2!1sru!2sro!4v1713010806160!5m2!1sru!2sro";
})

VLT.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5204.21397446057!2d-70.40694799851195!3d-24.627861796165934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a54b61d20df8a7%3A0xffc2d3eef16a026b!2sVery%20Large%20Telescope!5e1!3m2!1sru!2sro!4v1713011013448!5m2!1sru!2sro";
})

NAIC.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.3535688578295!2d-66.75468417699894!3d18.344044947285887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02db84dca94fc1%3A0x1ce481f2793da255!2z0J7QsdGB0LXRgNCy0LDRgtC-0YDQuNGPINCQ0YDQtdGB0LjQsdC-!5e1!3m2!1sru!2sro!4v1713011959856!5m2!1sru!2sro";
})

Roque.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.590374615411!2d-17.885416137097156!3d28.75724055762125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6bf074f599aaab%3A0x8938042021c61cf!2z0J7QsdGB0LXRgNCy0LDRgtC-0YDQuNGPINCg0L7QutC1LdC00LUt0LvQvtGBLdCc0YPRh9Cw0YfQvtGB!5e1!3m2!1sru!2sro!4v1713012058225!5m2!1sru!2sro";
})

IAO.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1516.1149611185754!2d78.964261888244!3d32.779231759802386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3900c62fbb049d0b%3A0x4b4063abd420f44b!2z0J7QsdGB0LXRgNCy0LDRgtC-0YDQuNGPINCY0L3QtNC40LDQvSDQkNGB0YLRgNC-0L3QvtC80LjQutCw0Ls!5e1!3m2!1sru!2sro!4v1713012254795!5m2!1sru!2sro";
})

RAN.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.989241980549!2d41.43958499983198!3d43.64673309122265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40588e3610000015%3A0xb484a7a006a689e!2z0KHQv9C10YbQuNCw0LvRjNC90LDRjyDQsNGB0YLRgNC-0YTQuNC30LjRh9C10YHQutCw0Y8g0L7QsdGB0LXRgNCy0LDRgtC-0YDQuNGPINCg0L7RgdGB0LjQudGB0LrQvtC5INCw0LrQsNC00LXQvNC40Lgg0L3QsNGD0Lo!5e1!3m2!1sru!2sro!4v1713012969286!5m2!1sru!2sro";
})

Keck.addEventListener("click", () => {
    mapRes.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0148652797197!2d-155.5778518096841!3d19.536010020196336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7953ef53fcc844c9%3A0x125658bfa768626b!2z0J_QvtCz0L7QtNC90LDRjyDQvtCx0YHQtdGA0LLQsNGC0L7RgNC40Y8g0L3QsCDQnNCw0YPQvdCwLdCb0L7QsA!5e1!3m2!1sru!2sro!4v1713012705557!5m2!1sru!2sro";
})

const chronologyBtn = document.getElementById("chronologyBtn")

const flightTable = document.getElementById("flightTable")

let isActive = false

chronologyBtn.addEventListener("click", () => {
    isActive = !isActive
    if (isActive) {
        flightTable.style.display = "block"
        chronologyBtn.innerText = "Hide"
    } else {
        flightTable.style.display = "none"
        chronologyBtn.innerText = "Show"
    }
})