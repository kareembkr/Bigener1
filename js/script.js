let imageContianer = document.querySelector(".image-conteiner");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let x = 0;
let timer;
prev.addEventListener("click", () => {
  clearTimeout(timer)
  x = x + 45;
  updateGallery();
});
next.addEventListener("click", () => {
  clearTimeout(timer)
  x = x - 45;

  updateGallery();
});
function updateGallery() {
  imageContianer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
timer= setTimeout(() => {
  x= x-45;
  updateGallery();
}, 2000);

}
updateGallery();