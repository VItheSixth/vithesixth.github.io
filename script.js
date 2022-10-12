function loadMovies(){
    fetch("movies.json")
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data));
}

function searchResults() {
    var searchBar = document.getElementById('searchBar');
    document.getElementById("demo").innerHTML = "You are searching for: " + searchBar.value;
}

window.addEventListener('load', loadMovies);
