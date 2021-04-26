const input = document.querySelector("#validation-input");
const validLength = input.dataset.length - 1;

const validation = function (event) {
  if (event.currentTarget.value.length === validLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", validation);