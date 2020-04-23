const updateContainer = document.querySelector("blockquote");
const containerText = updateContainer.innerText;

function updateText() {
  const formattedContainer = containerText
    .replace(/the/g, "banana")
    .replace(/The/g, "Banana");
  updateContainer.innerText = formattedContainer;
}
setTimeout(updateText, 3000);
