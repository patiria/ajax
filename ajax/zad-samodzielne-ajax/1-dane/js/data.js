
$('#get-data').click(function() {

    let id = $('text').val();
    console.log(id)
}

)  if (id>= 1) {
    console.log('dziala')

    $.getJson(
        "https://jsonplaceholder.typicode.com/users/1/${id}",
        function (users) {
            console.log(users);
        }
    )
}
    else {
        alert('brak danych')
    }


// 	if (id<= 9) { 
// 	// console.log('działa')
// 	$.getJSON(
// 		"https://jsonplaceholder.typicode.com/users/1/${id}", 
// 		function (data) {
// 	// data - ta wartosc mozemy ustawic taka jaka wartosc chcemy
// 	// otrzymac przy wywlowaniu, np chce sprawdzic uzytkownikow to wpisuje 'users'
// 	// jesli nie wiemy co otrzymujemy mozey uzyc 'data'
// 			// wyswietl w konsoli
// 			console.log(data);

// })


// 	}
//  else {
// alert('błąd')

// }
// })