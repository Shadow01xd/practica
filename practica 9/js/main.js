function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    let result;
    switch (operation) {
        case "sum":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("No se puede dividir cero.");
                return;
            }
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = "Resultado: " + result;
}