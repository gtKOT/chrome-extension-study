document.addEventListener("click", () => {
  const selectedText = window.getSelection().toString();

  const textBox = document.createElement("div");
  textBox.textContent = selectedText;
  textBox.style.position = "absolute";
  textBox.style.top = "100px";
  textBox.style.left = "100px";
  textBox.style.border = "1px solid";
  textBox.style.backgroundColor = "white";

  document.body.appendChild(textBox);
});