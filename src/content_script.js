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

document.addEventListener("click", ({ pageX, pageY }) => {
  const selectedText = window.getSelection().toString();

  const textBox = createTextBox(selectedText, pageX, pageY);

  document.body.appendChild(textBox);
});