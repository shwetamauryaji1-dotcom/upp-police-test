const subject = localStorage.getItem("selectedSubject");

const map = {
  accountancy: "ACCOUNTANCY",
  economics: "ECONOMICS",
  business: "BUSINESS STUDIES"
};

document.getElementById("subjectName").innerText =
  map[subject] || "ACCOUNTANCY";

const agree = document.getElementById("agree");
const proceed = document.getElementById("proceed");

agree.addEventListener("change", () => {
  proceed.disabled = !agree.checked;
});

proceed.addEventListener("click", () => {
  window.location.href = "exam.html";
});
