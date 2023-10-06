function appendToResult(value) {
    if (value == 'C') {
        document.getElementById("result").value = "";
    } else {
        document.getElementById("result").value += value;
    }
}

function calculateResult() {
    try {
        const expression = document.getElementById("result").value;
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}