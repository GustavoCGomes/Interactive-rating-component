const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you.hidden")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})