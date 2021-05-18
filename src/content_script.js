function createTextBox(text, x, y) {
  const textBox = document.createElement("div");
  textBox.textContent = text;
  textBox.style.position = "absolute";
  textBox.style.left = `${x}px`;
  textBox.style.top = `${y}px`;
  textBox.style.border = "1px solid";
  textBox.style.backgroundColor = "white";
  return textBox;
}

function createSearchBox(text, x, y) {
  const searchBox = document.createElement("a");
  searchBox.textContent = "クリックして検索";
  searchBox.style.position = "absolute";
  searchBox.style.left = `${x}px`;
  searchBox.style.top = `${y}px`;
  searchBox.style.border = "1px solid";
  searchBox.style.backgroundColor = "white";
  searchBox.href = `https://www.google.com/search?q=${text}`;
  searchBox.target = "_blank";
  searchBox.rel = "noreferrer";
  return searchBox;
}

document.addEventListener("click", ({ pageX, pageY }) => {
  const selectedText = window.getSelection().toString();
  if (selectedText === "") {
    return;
  }

  const box = createSearchBox(selectedText, pageX, pageY);
  box.addEventListener("click", (e) => e.stopPropagation());

  document.body.appendChild(box);
});