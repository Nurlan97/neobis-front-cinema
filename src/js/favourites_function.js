// export const addToFavorites = (movie) => {
//     // Получение избранных из localStorage
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//     // Проверка наличия фильма в избранном
//     const isAlreadyInFavorites = favorites.some((el) => el.id === movie.id);

//     if (!isAlreadyInFavorites) {
//         // Добавление фильма в избранное
//         favorites.push(movie);

//         // Сохранение избранных в localStorage
//         localStorage.setItem('favorites', JSON.stringify(favorites));

//         // Дополнительно можно обновить интерфейс на странице "Избранные"
//         // например, вызвать функцию onDOMContentLoadedSaved();
//     }
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////


// export function addToFavorites(movie) {
//     const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
//     const isAlreadyFavorite = favoriteMovies.some(favMovie => favMovie.kinopoiskId === movie.kinopoiskId);

//     if (!isAlreadyFavorite) {
//         favoriteMovies.push(movie);
//         localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
//     }

//     return !isAlreadyFavorite;
// }

// export function removeFromFavorites(movieId) {
//     const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
//     const updatedFavorites = favoriteMovies.filter(favMovie => favMovie.kinopoiskId !== movieId);
//     localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
// }

// export function showFavoriteMovies() {
//     const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
//     showMovies({ films: favoriteMovies }, true);
// }

// favoriteMoviesBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     moviesContent.classList.add('favorites-view');
//     showFavoriteMovies();
//     setActiveButton('favoriteMovies');
// });

// favoriteBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const isNowFavorite = toggleFavorite({ ...movie, kinopoiskId: movieId });
//     favoriteBtn.src = isNowFavorite ? 'image/heart__red.png' : 'image/heart__white.png';

//     if (!isNowFavorite && showFavorites) {
//         movieElement.remove();
//     }
// });


// export function showMovies(data, isFavorites) {
//     const moviesContainer = document.querySelector('.main__movies');
//     moviesContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых фильмов

//     data.films.forEach(movie => {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('main__movie');
//         // Добавьте остальной код для отображения фильма, например:
//         movieElement.innerHTML = `
//             <div class="main__movie_img_container">
//                 <img src="${movie.posterUrl}" alt="" class="main__movie_img">
//             </div>
//             <div class="main__movie_card_info">
//                 <div class="main__movie_info">
//                     <h2 class="main__movie_title">${movie.nameRu}</h2>
//                     <p class="main__movie_category">${movie.genres.map(el => el.genre).join(', ')}</p>
//                 </div>
//                 <div class="main__movie_rating main__movie_rating_green">9</div>
//                 <i class="fa-regular fa-heart main__movie_liked_btn"></i>
//             </div>
//         `;

//         const savedBtn = movieElement.querySelector('.main__movie_liked_btn');
//         savedBtn.addEventListener('click', () => {
//             const isAdded = isFavorites ? removeFromFavorites(movie.kinopoiskId) : addToFavorites(movie);
//             savedBtn.classList.toggle('added', isAdded);
//         });

//         moviesContainer.appendChild(movieElement);
//     });
// }
