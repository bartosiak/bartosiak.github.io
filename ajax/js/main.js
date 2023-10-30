$(document).ready(function () {
    const newDiv = $("<div id='dane-programisty'></div>");
    $("#btn").click(function () {
        $.getJSON(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                console.log(data);

                newDiv.html(
                    "Imię: " +
                        data.imie +
                        "<br>" +
                        "Nazwisko: " +
                        data.nazwisko +
                        "<br>" +
                        "Zawód: " +
                        data.zawod +
                        "<br>" +
                        "Firma: " +
                        data.firma
                );
                $("#btn").after(newDiv);
            }
        );
    });
});
