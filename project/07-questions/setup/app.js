document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
      questions?.forEach((card) => {
        if (card !== question) {
          card.classList.remove("show-text");
        } else {
          card.classList.toggle("show-text");
        }
      });
    });
  });
});
