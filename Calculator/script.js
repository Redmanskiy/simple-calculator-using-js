const display = document.getElementById("displaybar");

function appendToDisplay(input) {
    display.value += input;
}

function Calculate() {
    try {
        // Check if the input contains division by zero
        if (display.value.includes("/0")) {
            throw new Error("Division by zero");
        }
        
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Err";
    }
}

function clearDisplay() {
    display.value = "";
}
