var isFormValid = true;
var nameErrorMessage = "Name cannot have <, >, ', or spaces.";
var emailErrorMessage = "Email field only accepts valid emails.";
var phoneErrorMessage = "Phone field only accepts numbers.";
var complaintMessage = "Description of problem must be less than 120 characters.";
var requiredFieldMessage = "This field is required.";

$(document).ready(function () {

    function validateName() {
        var name = $("#customerName").val();
        if (!name.length > 0) {
            isFormValid = false;
            $("#nameError").html(requiredFieldMessage);
        }
        else {
            var regex = /[\s<>']/;
            var isNameInvalid = regex.test(name);
            if (isNameInvalid) {
                isFormValid = false;
                $("#nameError").html(nameErrorMessage);
            }
            else {
                $("#nameError").html("");
            }
        }
    }

    function validatePhoneNumber() {
        var phoneNumber = $("#customerPhoneNumber").val();
        var regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
        var isPhoneNumberValid = regex.test(phoneNumber);
        if (!phoneNumber.length > 0) {

        }
        else if (!isPhoneNumberValid) {
            isFormValid = false;
            $("#phoneError").html(phoneErrorMessage);
        }
        else {
            $("#phoneError").css("display", "none");
        }
    }

    function validateEmail() {
        var email = $("#customerEmail").val();
        if (!email.length > 0) {
            isFormValid = false;
            $("#emailError").html(requiredFieldMessage);
        }
        else {
            var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            var isEmailValid = regex.test(email);
            if (!isEmailValid) {
                isFormValid = false;
                $("#emailError").html(emailErrorMessage);
            }
            else {
                $("#emailError").css("display", "none");
            }
        }
    }

    function validateProductGroup() {
        var isItemSelected = $("input[name=ProductGroup]:checked").val();
        if (isItemSelected === undefined) {
            isFormValid = false;
            $("#productGroupError").html(requiredFieldMessage);
        }
    }

    function validateDescriptionLimit() {
        var complaintLength = $("#customerComplaint").val().length;
        if (!complaintLength > 0) {
            isFormValid = false;
            $("#complaintError").html(requiredFieldMessage);
        }
        else if (complaintLength > 120) {
            isFormValid = false;
            $("#complaintError").html(complaintMessage);
        }
    }

    $("#customerName").on("blur", validateName);
    $("#customerPhoneNumber").on("blur", validatePhoneNumber);
    $("#customerEmail").on("blur", validateEmail);

    $("#submitButton").click(function () {
        $("span").css("display", "inline");
        validateName();
        validatePhoneNumber();
        validateEmail();
        validateProductGroup();
        validateDescriptionLimit();
        if (isFormValid === true) {
            $("span").css("display","none");
            $("#complaintForm").submit();
            window.location = 'www.google.com';
        }
    });

    $("#resetButton").click(function () {
        $("span").css("display", "none");
        }
    );
});