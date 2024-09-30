const container = document.getElementById("container");
const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.clientHeight;
  const containerWidth = container.clientWidth;
  const btnHeight = btnNo.clientHeight;
  const btnWidth = btnNo.clientWidth;

  let newTop = getRandomNumber(0, containerHeight - btnHeight);
  let newLeft = getRandomNumber(0, containerWidth - btnWidth);

  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  // Assuming you have logic to show images
});
