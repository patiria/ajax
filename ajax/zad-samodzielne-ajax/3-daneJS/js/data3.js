
function pobranieDanych () {
    this.id = id;
    this.name = name;	
    this.url = url;	

    console.log('ID: ' + this.id + ',  '	+ 'Name: ' + this.name + 'url: ' + this.url);
    
    fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(res => {
    console.log(res);
    })
    

window.onscroll = function() {
    

}