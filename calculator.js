document.querySelectorAll(".calculator__key").forEach((item) =>
  item.addEventListener("click", function () {
    if (item.textContent !== "=")
      document.querySelector(".display-box").textContent += item.textContent;
  })
);

document.querySelector("#clear-button").addEventListener("click", function () {
  document.querySelector(".display-box").textContent = "";
});

document
  .querySelector("#calculate-button")
  .addEventListener("click", function () {
    let exp = document.querySelector(".display-box").textContent;
    document.querySelector(".display-box").textContent = eval(exp);
  });
