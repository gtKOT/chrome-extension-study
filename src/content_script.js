document.addEventListener("click", ({ pageX, pageY }) => {
  const selectedText = window.getSelection().toString();

  const textBox = document.createElement("div");
  textBox.textContent = selectedText;
  textBox.style.position = "absolute";
  textBox.style.top = `${pageY}px`;
  textBox.style.left = `${pageX}px`;
  textBox.style.border = "1px solid";
  textBox.style.backgroundColor = "white";

  document.body.appendChild(textBox);
});