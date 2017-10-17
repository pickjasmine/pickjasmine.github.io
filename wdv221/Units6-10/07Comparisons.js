function compareNames() {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    name1 = name1.toUpperCase();
    name2 = name2.toUpperCase();
    if (name1 === name2) {
        document.getElementById('results').innerHTML = "Same";
    }
    else {
        document.getElementById('results').innerHTML = "Different";
    }
}

function compareNumbers() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    if (number1 === number2) {
        document.getElementById('results').innerHTML = "Equal";
    }
    else if (number1 > number2) {
        document.getElementById('results').innerHTML = number1;
    }
    else {
        document.getElementById('results').innerHTML = number2;
    }
}

function resetForm() {
    document.getElementById('results').innerHTML = "";
}