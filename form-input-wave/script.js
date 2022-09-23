const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map((e, i) => `<span style="transition-delay:${i * 50}ms">${e}</span>`)
    .join("");
});
