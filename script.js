const container = document.querySelector(".container");
const inputs = document.querySelector(".input-fields");
const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  let valueIF = inputs.value;
  if (!valueIF) return;

  btn.innerHTML = "Generating OR Code...";
  img.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueIF} `;
  img.addEventListener("load", () => {
    btn.innerHTML = "Generate OR Code";
    container.classList.add("active");
  });
});

inputs.addEventListener("keyup", () => {
  container.classList.remove("active");
});


