function getData(event) {
  event.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(response => {
      let pUserId = document.createElement("p");
      let pUserName = document.createElement("p");
      let pUserURL = document.createElement("p");
      console.log(response);
      pUserId.innerHTML = "User ID: " + response.id;
      pUserName.innerHTML = "User Name: " + response.username;
      pUserURL.innerHTML =
        "User URL: http://" + response.website + "<br>--------";

      document.body.appendChild(pUserId);
      document.body.appendChild(pUserName);
      document.body.appendChild(pUserURL);
    });
}

document.getElementById("get-data").addEventListener("click", getData);
