let toggle = true;

document
  .getElementById("light-dark")
  .addEventListener("click", function func() {
    let dBody = document.body;
    if (toggle === true) {
      dBody.style.backgroundColor = "white";
      dBody.style.color = "black";
    } else {
      dBody.style.color = "white";
      dBody.style.backgroundColor = "black";
    }
    toggle = !toggle;
  });
