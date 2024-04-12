let chronologyBtn = document.getElementById("chronologyBtn")

let flightTable = document.getElementById("flightTable")

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