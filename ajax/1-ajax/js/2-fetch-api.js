
// Pobierz dane z adresu URL - funkcja fetch(zwraca obiekt Promise - Obietnica)
// Jeśli Promise zostanie rozwiązany to fetch() zwróci obiekt odpowiedzi (response)
// Zwracamy obiekt odpowiedzi przetworzony na obiekt JSON
// Od tego momemtu możemy korzystać z tych danych

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response =>response.json())
.then(response=>{
    console.log(response);
});