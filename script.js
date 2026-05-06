const icons = document.querySelectorAll(".plus-icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const parentDiv = event.target.closest(".questions-panel > div");
    const answerDiv = parentDiv.querySelector(".answer");
    if (answerDiv.style.display === "none" || answerDiv.style.display === "") {
      answerDiv.style.display = "block";
      icon.src = "images/icon-minus.svg";
    } else {
      answerDiv.style.display = "none";
      icon.src = "images/icon-plus.svg";
    }
  });
});
