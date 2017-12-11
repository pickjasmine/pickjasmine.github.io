function getShipping() {
    //get selected product and price
    var productList = document.getElementById("product");
    var selectedProductPrice = parseFloat(productList.options[productList.selectedIndex].value);

    //get quantity
    var quantity = parseInt(document.getElementById("quantity").value);

    //calculate sales total with quantity and price
    var salesTotal = (quantity * selectedProductPrice).toFixed(3);

    //get selected state and tax rate
    var stateList = document.getElementById("state");
    var selectedStateTax = parseFloat(stateList.options[stateList.selectedIndex].value);

    //calculate tax amount based on state and sales total
    var taxAmount = (salesTotal * selectedStateTax).toFixed(3);

    //get selected delivery type and price
    var deliveryList = document.getElementById("shipping");
    var selectedDeliveryPrice = parseFloat(deliveryList.options[deliveryList.selectedIndex].value);

    //calculate total cost
    var totalCost = (+salesTotal + +taxAmount + +selectedDeliveryPrice).toFixed(2);

    //put formatted total cost into appropriate field
    document.getElementById('total').value = dollarFormat(totalCost);
}


function dollarFormat(valuein) {

    var formatStr = " ";

    var Outdollars = " ";

    var decipos = valuein.indexOf(".");

    if (decipos === -1) {
        decipos = valuein.length
    }

    var dollars = valuein.substring(0, decipos);
    var dollen = dollars.length;
    if (dollen > 3) {
        while (dollen > 0) {
            tDollars = dollars.substring(dollen - 3, dollen);
            if (tDollars.length == 3) {
                Outdollars = "," + tDollars + Outdollars;
                dollen = dollen - 3
            }
            else {
                Outdollars = tDollars + Outdollars;
                dollen = 0
            }
        }
        if (Outdollars.substring(0, 1) === ".") {
            dollars = Outdollars.substring(1, Outdollars.length)
        }
        else {
            dollars = Outdollars
        }
    }
    var cents = valuein.substring(decipos + 1, decipos + 3);
    if (cents === "") {
        cents = "00";
    }
    if (cents.length === 1) {
        cents = cents + "0";
    }
    formatStr = "$" + dollars + "." + cents;

    return formatStr;
}