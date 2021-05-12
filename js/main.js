const url = "http://localhost:8080/dashboard";

$('#header').toggle(false)


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
            console.log('blad');
        }
    };

    http_request.open('GET', url, true);
    http_request.setRequestHeader("Authorization", "Basic " + btoa("admin:admin"))
    http_request.send(null);
}