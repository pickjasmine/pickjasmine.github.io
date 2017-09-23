$(document).ready(function () {
    $("#contactReason").change(function () {
        var selected = $(this).val();
        if (selected == "complaints") {
            $("#newList").html("<label for='complaintReason'>Select a complaint category." +
                "<select name='complaintReason' id='complaintReason'>" +
                "<option value='select'>Select a Reason</option>" +
                "<option value='customerService'>Customer service</option>" +
                "<option value='inStore'>In-store experience</option>" +
                "<option value='callIn'>Online services</option>" +
                "<option value='other'>Other</option>" +
                "</select>" +
                "</label>");
        }
        else if (selected == "technical") {
            $("#newList").html("<label for='technicalReason'>Select your technical issue.</label><br>" +
                "<input type='checkbox' name='technicalReason1' id='startDevice'>Device not starting<br>" +
                "<input type='checkbox' name='technicalReason2' id='battery'>Battery Issues<br>" +
                "<input type='checkbox' name='technicalReason3' id='functionDevice'>Device not functioning properly<br>" +
                "<input type='checkbox' name='technicalReason4' id='connectDevice'>Device not connecting to services");
        }
        else if (selected == "products") {
            $("#newList").html("<label for='productReason'>Select your product.</label><br>" +
                "<input type='radio' name='productReason' id='phone' value='phone'>Phone<br>" +
                "<input type='radio' name='productReason' id='computer' value='computer'>Computer<br>" +
                "<input type='radio' name='productReason' id='tablet' value='tablet'>Tablet<br>" +
                "<input type='radio' name='productReason' id='smartHome' value='smartHome'>Smart Home Device<br>" +
                "<input type='radio' name='productReason' id='accessory' value='accessory'>Smart accessory<br>");
        }
        else {
            $("#newList").html("");
        }
    });


});





