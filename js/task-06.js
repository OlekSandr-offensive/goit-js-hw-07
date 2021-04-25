const input = document.querySelector('#validation-input');
const validLength = input.dataset.length;

// console.log(input.classList);
// input.classList.add("valid");
// input.classList.add("invalid");

const validation = function (event) {
    if (event.currentTarget.value.length === validLength) {
        return input.classList.add("valid");
    } else {
        return input.classList.add("invalid")
    }
}

input.addEventListener('blur', validation);