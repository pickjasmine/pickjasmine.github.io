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

}

function resetForm() {
    document.getElementById('results').innerHTML = "";
}