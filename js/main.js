const url = "http://localhost:8080/dashboard";

function loadUserData() {

  document.getElementById('navbarText').innerHTML = "<span class='navbar-text text-light'>" +  "Jesteś zalogowany jako: <b>" +  localStorage.getItem('login') + "</b></span>"
}


function loadFromApi() {
    let http_request = new XMLHttpRequest();

    http_request.onload = function (xhr) {
        if (xhr.target.status == 200) {
            var data = JSON.parse(xhr.target.response);
            document.getElementById("bookList").innerHTML = data.map(
                function (val) {
                    return "<tr>" +
                        "<td>" + val.id + "</td>" +
                        "<td>" + val.title + "</td>" +
                        "<td>" + val.author + "</td>" +
                        "<td>" + val.year + "</td>" +
                        "</tr>"
                }).join('')
        } else {
            console.log('Blad');
        }
    };

    http_request.onerror = function (e){
        console.log(e.target.status)
        console.log(e.target.error)
        alert('Wystąpił błąd podczas pobierania listy książek !')
    }

    http_request.open('GET', url, true);
    http_request.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem('login')+":" + localStorage.getItem('pass')))
    http_request.send(null);
}
