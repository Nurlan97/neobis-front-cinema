// import { showMovies } from "./favourites_function.js";

const onDOMContentLoaded = () => {

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth()
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const currentMonth = months[currentMonthIndex];

    const API_KEY = 'b8af480e-35dc-41c4-a7fd-7134b7a73086';
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=${currentMonth}`;

    const fetchCurrentMonthMovieReleases = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            });
            const content = await response.json();
            // console.log(content)

            showCurrentMonthMovieReleases(content)

        } catch (err) {
            console.log(err)
        }

        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'X-API-KEY': 'b8af480e-35dc-41c4-a7fd-7134b7a73086',
        //         'Content-Type': 'application/json',
        //     },

        // })
        //     .then(res => res.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.log(err))
    }



    fetchCurrentMonthMovieReleases()

    const showCurrentMonthMovieReleases = (data) => {
        const movies = document.querySelector('.main__movies');

        data.items.forEach(el => {
            const movie = document.createElement('div');
            movie.classList.add('main__movie')
            movie.innerHTML = `
                <div class="main__movie_img_container">
                    <img src="${el.posterUrl}"
                    alt="" class="main__movie_img">
                </div>
                <div class="main__movie_card_info">
    
                    <div class="main__movie_info">
                        <h2 class="main__movie_title">${el.nameRu}</h2>
                        <p class="main__movie_category">${el.genres.map(el => el.genre).join(', ')}</p>
                    </div>
                    <div class="main__movie_rating main__movie_rating_green">9</div>
                    <i class="fa-regular fa-heart main__movie_liked_btn"></i>
                    <!-- <i class="fa-solid fa-heart main__movie_liked_btn"></i> --> 
                </div>
            `
            const saved_btn = movie.querySelector('.main__movie_liked_btn')
            saved_btn.addEventListener('click', () => {

                const isAdded = addToFavorites(el); // временно
                saved_btn.className = `fa-regular fa-heart main__movie_liked_btn ${isAdded ? 'added' : ''}`;// временно

            

            })



            movies.appendChild(movie)

        })

    


    }

    function addToFavorites(movie) {
        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        const isAlreadyFavorite = favoriteMovies.some(favMovie => {
            // favMovie.kinopoiskId === movie.kinopoiskId
            let movie_id = movie.kinopoiskId || movie.filmId
            let favMovieId = favMovie.kinopoiskId || favMovie.filmId
            return movie_id === favMovieId
        });


        if (!isAlreadyFavorite) {
            favoriteMovies.push(movie);

        } else {
            favoriteMovies = favoriteMovies.filter(favMovie => {
                let movie_id = movie.kinopoiskId || movie.filmId
                let favMovieId = favMovie.kinopoiskId || favMovie.filmId
                return movie_id !== favMovieId

            });

        }

        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));

        return isAlreadyFavorite;
    }
}


document.addEventListener('DOMContentLoaded', onDOMContentLoaded)