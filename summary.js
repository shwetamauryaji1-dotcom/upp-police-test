window.onload = function () {
  const examResult = JSON.parse(localStorage.getItem("examResult"));

  if (!examResult) {
    alert("Exam data not found!");
    window.location.href = "exam.html";
    return;
  }

  const { questions, answers, status } = examResult;

  let total = questions.length;
  let answered = 0;
  let notAnswered = 0;
  let marked = 0;
  let notVisited = 0;

  status.forEach((s, i) => {
    if (s === "notVisited") {
      notVisited++;
    }
    else if (s === "notAnswered") {
      notAnswered++;
    }
    else if (s === "answered") {
      answered++;
    }
    else if (s === "marked" && answers[i] === null) {
      marked++;
    }
    else if (s === "answeredMarked") {
      answered++;
      marked++;
    }
  });

  document.getElementById("totalQ").innerText = total;
  document.getElementById("answered").innerText = answered;
  document.getElementById("notAnswered").innerText = notAnswered;
  document.getElementById("marked").innerText = marked;
  document.getElementById("notVisited").innerText = notVisited;
};

// FINAL SUBMIT → RESULT PAGE
function finalSubmit() {
  window.location.href = "result.html";
}

// BACK TO EXAM
function goBack() {
  window.location.href = "exam.html";
}
