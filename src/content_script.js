document.addEventListener("click", () => {
  const selectedText = window.getSelection().toString();
  window.alert(selectedText);
});