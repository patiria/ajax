// jesli dokument zaladowany
$(document).ready(function() {
  "use strict";

  $("#pobierz-dane").click(function() {
    // pierwszy sposob $.getJSON
    // $.getJSON("https://jsonplaceholder.typicode.com/users/1", function(data) {
    //   // wyswietl w konsoli
    //   console.log(data);

    //   // wyswietl wynik na stronie
    //   $("body").append($("<p>").text(data.id));
    //   $("body").append($("<p>").text(data.username));
    //   $("body").append($("<p>").text("https://" + data.website));
    //   $("body").append($("<p>").text("---------"));
    // });

    //        // drugi sposob $.ajax
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users/1",
      dataType: "json",
      success: function(resultJSON) {
        /*
                   !!! Nie parsujemy do postaci obiektu JSON, bo od razu taki obiekt dostajemy w odpowiedzi !!!
                   var jsonObj = JSON.parse(resultJSON);
                   */
        console.log(resultJSON);

        // wyswietl wynik na stronie
        $("body").append($("<p>").text(resultJSON.id));
        $("body").append($("<p>").text(resultJSON.username));
        $("body").append($("<p>").text("https://" + resultJSON.website));
        $("body").append($("<p>").text("---------"));
      },
      onerror: function(msg) {
        console.log(msg);
      }
    });
  });
});
