// let toggle = true;

// document
//   .getElementById("light-dark")
//   .addEventListener("click", function func() {
//     let dBody = document.body;
//     if (toggle === true) {
//       dBody.style.backgroundColor = "black";
//       dBody.style.color = "white";
//     } else {
//       dBody.style.color = "black";
//       dBody.style.backgroundColor = "white";
//     }
//     toggle = !toggle;
//   });

document.getElementById("light-dark").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// function toggleClearButton() {
//   const input = document.getElementById("search");
//   const button = document.getElementById("clear-button");
//   button.style.display = input.value ? "block" : "none";
// }

function clearSearch() {
  const input = document.getElementById("search");
  input.value = "";
  // toggleClearButton();
  input.focus();
}
