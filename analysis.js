const examResult = JSON.parse(localStorage.getItem("examResult"));
let index = 0;

const questions = examResult.questions;
const answers = examResult.answers;

function loadQuestion() {
  const q = questions[index];
  const userAns = answers[index];

  document.getElementById("qCount").innerText =
    `Question ${index + 1} of ${questions.length}`;

  document.getElementById("questionText").innerText = q.question;

  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    let cls = "";
    if (i === q.correct - 1) cls = "correct";
    if (i === userAns && userAns !== q.correct - 1) cls = "wrong";

    optDiv.innerHTML += `<div class="${cls}">${String.fromCharCode(65+i)}. ${opt}</div>`;
  });

  document.getElementById("correctLine").innerText =
    `Correct Answer: ${String.fromCharCode(64 + q.correct)}. ${q.options[q.correct - 1]}`;

  document.getElementById("topic").innerText =
    `Topic: ${q.topic}`;

  document.getElementById("explanation").innerText =
    q.explanation;
}

function nextQ() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  }
}

function prevQ() {
  if (index > 0) {
    index--;
    loadQuestion();
  }
}

function retryTest() {
  location.href = "index.html";
}

loadQuestion();
