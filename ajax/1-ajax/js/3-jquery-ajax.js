$('#btnGetData').click(function() {

	let id = $('#number').val();
	console.log(id);

	if (id<= 9) { 
	// console.log('działa')
	$.getJSON(
		"https://jsonplaceholder.typicode.com/users/1/${id}", 
		function (data) {
	// data - ta wartosc mozemy ustawic taka jaka wartosc chcemy
	// otrzymac przy wywlowaniu, np chce sprawdzic uzytkownikow to wpisuje 'users'
	// jesli nie wiemy co otrzymujemy mozey uzyc 'data'
			// wyswietl w konsoli
			console.log(data);

})


	}
 else {
alert('błąd')

}
})

//przyklad js
// function dodawanie(a, b)  {
// 	consol.log(a + b)
// }
// dodawanie(4, 6);