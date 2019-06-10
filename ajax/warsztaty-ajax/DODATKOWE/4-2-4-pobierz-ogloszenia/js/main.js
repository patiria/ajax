var btn = document.getElementById('get-offers');

function getOffers() {
    var xml = new XMLHttpRequest(),
        output = document.getElementsByClassName('offers')[0],
        data = [],
        html = '';


    xml.open('GET', 'http://leguralnie.pl/json/ogloszenia-json.json');
    xml.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            html = '';
            response.forEach(function (offer) {
                html += '<div class="offer">';
                html += '<figure class="offer__image">';
                html += '<img src="' + offer.image + '" />';
                html += '</figure>';
                html += '<div class="offer__description">';
                html += '<small>ID: ' + offer.id + '</small>';
                html += '<h1>' + offer.title + '</h1>';
                html += '<p>' + offer.description + '</p>';
                html += '<small>';
                html += 'Kategoria: ' + offer.category + '<br>';
                html += 'Miasto: ' + offer.city + '<br>';
                html += 'Kontakt: ' + offer.contact + '<br>';
                html += '</small>';
                html += '</div>';
                html += '</div>';
            });

            if (html != '') {
                output.innerHTML = html;
            }
        }
    });

    xml.send();
}

btn.addEventListener('click', getOffers);