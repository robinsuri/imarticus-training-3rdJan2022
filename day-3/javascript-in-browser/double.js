let inputButton = document.getElementById("button");
inputButton.addEventListener("click", function () {
  let value = parseInt(document.getElementById("text").value);
  value = value * 2;
  document.getElementById("output").textContent = value;
});
