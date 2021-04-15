console.log('Hello!')

window.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Again !")

  const spinButton = document.querySelector("#spin-button")
  const spinner = document.querySelector("#spinner")

  spinButton.addEventListener("click", () => {
    spinner.classList.toggle("spinning")
  })
})