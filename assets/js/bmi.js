// Convert CM to M
function convertHeight(cm) {
    return cm / 100;
}

// Cache Event Elements
var calculate = $("#calculate");
var result = $("#xs-bmi-info");

result.fadeOut();

// RENDER SELECTED UNIT
calculate.on("click", function(e) {
    e.preventDefault();

    var weight = $("#xs-weight").val();
    var height = $("#xs-height").val();
    var height = convertHeight(height);

    if (height !== "" && weight !== "") {
        bmi = parseFloat(weight / (height * height)).toFixed(2);

        if (bmi > 25) {
            result
                .html(
                    '<div class="xs-icon bg-warning"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-warning"><strong>Упссс! Ти маєш зайву вагу.</strong></span> Твій індекс: ' +
                    bmi +
                    " </p>"
                )
                .fadeIn();
        } else if (bmi < 18.5) {
            result
                .html(
                    '<div class="xs-icon bg-info"><spna class="icon icon-thumbs-down"></spna></div><p> <span class="text-info"><strong>Упсс! Треба підкачатись.</strong></span> Твій індекс: ' +
                    bmi +
                    " </p>"
                )
                .fadeIn();
        } else {
            result
                .html(
                    '<div class="xs-icon xs-green-bg"><spna class="icon icon-thumbs-up"></spna></div><p> <span class="xs-green-color"><strong>Круто! Твої параметри ідеальні.</strong></span> Твій індекс: ' +
                    bmi +
                    " </p>"
                )
                .fadeIn();
        }
    }
});
