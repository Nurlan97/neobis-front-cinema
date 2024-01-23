const onDOMContentLoadedSaved = () => {

    // function addToFavorites(movie) {
    //     const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    //     const isAlreadyFavorite = favoriteMovies.some(favMovie => favMovie.kinopoiskId === movie.kinopoiskId);
    
    //     if (!isAlreadyFavorite) {
    //         favoriteMovies.push(movie);
    //         localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    //     }
    
    //     return !isAlreadyFavorite;
    // }
    
    function removeFromFavorites(movie) {
        const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        const updatedFavorites = favoriteMovies.filter(favMovie => {
            // favMovie.kinopoiskId !== movie.kinopoiskId
            let movie_id = movie.kinopoiskId || movie.filmId
            let favMovie_id = favMovie.kinopoiskId || favMovie.filmId
            return movie_id !== favMovie_id
        });
        localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
        showMovies({ films: updatedFavorites })
    }
    
    function showFavoriteMovies() {
        const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        showMovies({ films: favoriteMovies });
        // showMovies(favoriteMovies, true);
    }
    
    showFavoriteMovies();
    
    
    function showMovies(data) {
        const moviesContainer = document.querySelector('.saved__movies');
        moviesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых фильмов
    
    
    
        // const films = data.items || data.releases || data.movies
    
        data.films.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('main__movie');
            // Добавьте остальной код для отображения фильма, например:
            movieElement.innerHTML = `
                <div class="main__movie_img_container">
                    <img src="${movie.posterUrl}" alt="" class="main__movie_img">
                </div>
                <div class="main__movie_card_info">
                    <div class="main__movie_info">
                        <h2 class="main__movie_title">${movie.nameRu}</h2>
                        <p class="main__movie_category">${movie.genres.map(el => el.genre).join(', ')}</p>
                    </div>
                    <div class="main__movie_rating main__movie_rating_green">9</div>
                    <i class="fa-regular fa-heart main__movie_liked_btn"></i>
                </div>
            `;
    
            const savedBtn = movieElement.querySelector('.main__movie_liked_btn');
            savedBtn.addEventListener('click', () => removeFromFavorites(movie));
    
            moviesContainer.appendChild(movieElement);
    
            // console.log(moviesContainer)
            if(moviesContainer.innerHTML === "") {
                const message = moviesContainer.createElement('h2')
                message.textContent = "No movies added to the Favorites!!!"
            }
        });
    }
    
    
};

document.addEventListener('DOMContentLoaded', onDOMContentLoadedSaved); 
