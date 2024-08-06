const input = document.getElementById('searchInput')
function showError(message) {
    const errorMessage = document.querySelector('.error-message');
        document.getElementById('movieResults').style.display = 'none'
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';

        setTimeout(() => {
            errorMessage.style.display = 'none'
            document.getElementById('movieResults').style.display = 'grid'
        }, 2000);
}
document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault()
    const movieName = input.value
    if (movieName) {
        movieData(movieName)
    } else {
        showError('Please Enter Movie Name')
    }
})
async function movieData(movieName) {
    try {
        let API = `https://www.omdbapi.com/?apikey=3e53cc40&t=${movieName}`;
        let response = await fetch(API);
        let data = await response.json();

        if (data.Response === "True") {
            document.querySelector('.title').style.color = 'black';
            document.querySelector('.title').innerHTML = 'Movie Title: ' + data.Title;
            document.querySelector('.movie-poster').src = data.Poster;
            document.querySelector('.release-Year').style.display = 'block';
            document.querySelector('.release-Year').innerHTML = 'Release Year: ' + data.Year;
        } else {
            document.querySelector('.title').style.color = 'red';
            document.querySelector('.title').innerHTML = 'Movie not found!';
            document.querySelector('.movie-poster').src = 'https://via.placeholder.com/300x400';
            document.querySelector('.release-Year').style.display = 'none';
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}
