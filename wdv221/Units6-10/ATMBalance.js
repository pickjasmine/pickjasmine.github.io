var accountBalance = 0.00;

function deposit() {
    if (!isNegative()) {
        accountBalance += parseFloat(document.getElementById('inAmount').value);
        console.log("Account balance: " + accountBalance);
    }
}

function withdraw() {
    if (!isNegative() || parseFloat(document.getElementById('inAmount').value > accountBalance)) {
        accountBalance -= parseFloat(document.getElementById('inAmount').value);
        console.log("Account balance: " + accountBalance);
    }
}

function displayBalance() {
    document.getElementById('outBalance').value = accountBalance;
}

function isNegative() {
    if (parseFloat(document.getElementById('inAmount').value) < 0) {
        alert("You cannot enter a negative amount in this field.");
        return true;
    }
    else {
        return false;
    }
}