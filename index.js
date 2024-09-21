const current_Year = "2024";
const current_Answer = "Ответ верный!";
const error_Answer = "Ответ не верный!";
const notValue_Answer = "Укажите год!";

const inputnode = document.querySelector(".js-input")
const buttonnode = document.querySelector(".js-button")
const outputnode = document.querySelector(".js-output")

buttonnode.addEventListener("click", function() {
    const answer = inputnode.value;

    const inputValue = inputnode.value
    let output = current_Year;
    
    if (answer == "") {
        output = notValue_Answer;

    } else if (answer !== output) {
        output = error_Answer;

    } else {
        output = current_Answer;}
outputnode.innerHTML = output;
})