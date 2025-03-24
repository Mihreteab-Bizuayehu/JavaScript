// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button-container button");
let expression = "";


const update = () => display.value = expression;

buttons.forEach((button) => {
    const value = button.value;
    button.addEventListener('click', () => {
        if (value === "C") {
            expression = "";
            update();
        }
        else if (value == "DEL") {
            expression = display.value.slice(0, -1);
            update();
        }
        else if (value == "=") {
            try {
                expression = String(eval(display.value.replace(/x/g, "*")));
            update();
            }
            catch (error) {
                expression = "";
            }
        }
        else {
            display.value +=value
        }
    })
})
