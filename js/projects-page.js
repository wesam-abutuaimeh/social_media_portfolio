const alert = document.querySelector(".alert-warning");
const closeAlert = document.getElementById("close-alert");

closeAlert.addEventListener("click", () => {
  alert.classList.add("remove");
});
