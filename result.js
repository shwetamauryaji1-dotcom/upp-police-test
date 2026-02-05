const examResult = JSON.parse(localStorage.getItem("examResult"));

if (!examResult) {
  alert("Result not found");
  location.href = "index.html";
}

const { questions, answers } = examResult;

let correct = 0, wrong = 0, skipped = 0;
const tbody = document.getElementById("resultBody");

questions.forEach((q, i) => {
  const user = answers[i];
  const correctIdx = q.correct - 1;

  let status = "Skipped";
  if (user === null) {
    skipped++;
  } else if (user === correctIdx) {
    correct++;
    status = "Correct";
  } else {
    wrong++;
    status = "Wrong";
  }

  tbody.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${user === null ? "---" : String.fromCharCode(65 + user)}</td>
      <td>${status}</td>
      <td>${String.fromCharCode(65 + correctIdx)}</td>
    </tr>
  `;
});

const total = questions.length;

document.getElementById("totalQ").innerText = total;
document.getElementById("correct").innerText = correct;
document.getElementById("wrong").innerText = wrong;
document.getElementById("skipped").innerText = skipped;

document.getElementById("mTotal").innerText = total;
document.getElementById("mCorrect").innerText = correct;
document.getElementById("mWrong").innerText = wrong;
document.getElementById("mSkipped").innerText = skipped;

const percent = Math.round((correct / total) * 100);
document.getElementById("scorePercent").innerText = percent + "%";
document.getElementById("scoreBar").style.width = percent + "%";
document.getElementById("donutText").innerText = percent + "%";

const pCorrect = Math.round((correct / total) * 100);
const pWrong = Math.round((wrong / total) * 100);
const pSkipped = 100 - pCorrect - pWrong;

document.getElementById("pCorrect").innerText = pCorrect + "%";
document.getElementById("pWrong").innerText = pWrong + "%";
document.getElementById("pSkipped").innerText = pSkipped + "%";

document.querySelector(".donut").style.background =
  `conic-gradient(
    #38a169 0% ${pCorrect}%,
    #e53e3e ${pCorrect}% ${pCorrect + pWrong}%,
    #ed8936 ${pCorrect + pWrong}% 100%
  )`;

function viewAnswers() {
  window.location.href = "analysis.html";
}
