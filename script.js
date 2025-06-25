const rakeBtn = document.getElementById("rakeButton");

rakeBtn.addEventListener("click", () => {
  const rakeLines = document.querySelector(".rake-lines");
  rakeLines.style.transform = "rotate(180deg)";
  setTimeout(() => {
    rakeLines.style.transform = "rotate(0deg)";
  }, 1000);
});
