console.log('Hello!')

window.addEventListener("DOMContentLoaded", () => {
  console.log("Hello Again !")

  const spinButton = document.querySelector("#spin-button")
  const spinner = document.querySelector("#spinner")

  spinButton.addEventListener("click", () => {
    spinner.classList.toggle("spinning")

    if(spinner.classList.contains("spinning")) {
      spinner.innerHTML = "Like a record baby"
    }
    else {
      spinner.innerHTML = "You spin me right round ..."
    }
  })
})