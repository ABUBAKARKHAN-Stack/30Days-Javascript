// Get the search input element
const input = document.getElementById('searchInput');

// Function to display error messages
function showError(message) {
    const errorMessage = document.querySelector('.error-message');
    document.getElementById('movieResults').style.display = 'none'; // Hide movie results
    errorMessage.textContent = message; // Set error message
    errorMessage.style.display = 'block'; // Show error message

    // Hide error message and show movie results after 2 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
        document.getElementById('movieResults').style.display = 'grid';
    }, 2000);
}

// Function to manage loading state
function setLoading(isLoading) {
    const text = document.querySelector('.loading-text');
    text.style.display = isLoading ? 'flex' : 'none'; // Show loading text if isLoading is true
    const onLoadingCard = document.querySelector('.onLoading');
    onLoadingCard.style.display = isLoading ? 'none' : 'grid'; // Show loading card if isLoading is false
}

// Event listener for form submission
document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const movieName = input.value; // Get the value from the input field
    if (movieName) {
        movieData(movieName); // Fetch and display movie data
        document.querySelector('.onLoading').display = 'grid'
        document.querySelector('.about-movie').style.display = 'flex'
        const moreDetails = document.querySelector('.more-info')
        moreDetails.addEventListener("click", () => {
            const details_Section = document.querySelector('#movieDetail')
            if (!details_Section.classList.contains('show')) {
                details_Section.style.display = 'block'
                setTimeout(() => {
                    details_Section.classList.add('show')
                }, 10);
            } else {
                details_Section.classList.remove('show')
                setTimeout(() => {
                    details_Section.style.display = 'none'
                }, 300);
            }

        })
    } else {
        showError('Please Enter Movie Name'); // Show error if no movie name is entered
    }
});

// Function to fetch and display movie data
async function movieData(movieName) {
    setLoading(true); // Show loading state
    try {
        const API = `https://www.omdbapi.com/?apikey=3e53cc40&t=${movieName}`; // API endpoint with movie name
        const response = await fetch(API); // Fetch data from API
        const data = await response.json(); // Parse response to JSON
        console.log(data);


        // Check if the movie was found
        if (data.Response === "True") {
            document.querySelector('.title').style.color = 'white'
            document.querySelector('.title').innerHTML = 'Movie Title: ' + data.Title; // Display movie title
            document.querySelector('.movie-poster').src = data.Poster; // Display movie poster
            document.querySelector('.release-Year').style.display = 'block'; // Show release year
            document.querySelector('.release-Year').innerHTML = 'Release Year: ' + data.Year; // Display release year
            document.querySelector('.more-info').style.display  = 'block'
            document.querySelector('.rating-div').style.display  = 'flex'
            document.querySelector('.release-date').innerHTML = 'Release Date: ' + data.Released
            document.querySelector('.genre').innerHTML = "Genre: " + data.Genre
            document.querySelector('.rating').innerHTML = data.Ratings[0].Value
            document.querySelector('.writer').innerHTML = `Writer: ${data.Writer}`
            document.querySelector('.movie-title').innerHTML = data.Title
            document.querySelector('.movie-type').innerHTML = `"${data.Type.toUpperCase()}"`
            document.querySelector('.plot').innerHTML = data.Plot
            document.querySelector('.movie-director').innerHTML = data.Director
            document.querySelector('.movie-actors').innerHTML = data.Actors
        } else {
            document.querySelector('.title').style.color = 'red'; // Set title color to red if movie not found
            document.querySelector('.title').innerHTML = 'Movie not found!'; // Display movie not found message
            document.querySelector('.movie-poster').src = 'https://via.placeholder.com/600x400?text=Movie%20Not%20Found%20:('; // Display placeholder image
            document.querySelector('.release-Year').style.display = 'none'; // Hide release year
            document.querySelector('.more-info').style.display  = 'none'
            document.querySelector('.rating-div').style.display  = 'none'
        }
    } catch (error) {
        console.error('Error fetching movie data:', error); // Log any errors that occur
    } finally {
        setLoading(false); // Hide loading state
    }
}
