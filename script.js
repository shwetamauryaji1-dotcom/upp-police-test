const agree = document.getElementById("agree");
const btn = document.getElementById("proceed");

agree.addEventListener("change", () => {
  btn.disabled = !agree.checked;
  btn.classList.toggle("enabled", agree.checked);
});
