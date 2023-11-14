export const Counter = (id) => {
  let count = 0

  const parent = document.getElementById(id)
  
  // Create the display div
  const container = document.createElement("div")
  const numDisplay = document.createElement("div")
  const button = document.createElement("button")
  button.innerHTML = "Update"
  const updateCount = () => {
    console.log('clicked')
    numDisplay.innerText = ++count
  }
  button.addEventListener("click", updateCount)
  container.appendChild(numDisplay)
  container.appendChild(button)
  parent.append(container)
  numDisplay.innerText = count
}
