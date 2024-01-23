const onDOMContentLoaded = () => {

    const API_KEY = 'b8af480e-35dc-41c4-a7fd-7134b7a73086';
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1';

    const fetchTopBestMovies = async () => {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type':'application/json',
            },
        })

        const content = await response.json();

        showTopBestMovies(content);
    }

    fetchTopBestMovies()

    const showTopBestMovies = (data) => {
        const movies = document.querySelector('.topBestMovies__movies');
        
        // console.log(data)
        data.items.forEach(el => {
            const movie = document.createElement('div');
            movie.classList.add('topBestMovies__movie');
            movie.innerHTML = `
                <div class="topBestMovies__movie_img_container">
                    <img src="${el.posterUrl}"
                    alt="" class="topBestMovies__movie_img">
                </div>
                <div class="topBestMovies__movie_card_info">

                    <div class="topBestMovies__movie_info">
                        <h2 class="topBestMovies__movie_title">${el.nameRu}</h2>
                        <p class="topBestMovies__movie_category">${el.genres.map(el => el.genre).join(', ')}</p>
                    </div>
                    <div class="topBestMovies__movie_rating topBestMovies__movie_rating_green">${el.ratingKinopoisk}</div>
                        <i class="fa-regular fa-heart topBestMovies__movie_liked_btn"></i>
                        <!-- <i class="fa-solid fa-heart topBestMovies__movie_liked_btn"></i> --> 
                </div>
            `

            const saved_btn = movie.querySelector('.topBestMovies__movie_liked_btn');
            saved_btn.addEventListener('click',  () => {
                addToFavorite(el)
            })


            movies.appendChild(movie)

        })
    }

    function addToFavorite(movie){
        let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'))

        // console.log(favoriteMovies)

        const isFavorite = favoriteMovies.some(el => {
            let movie_id = movie.kinopoiskId || movie.filmId;
            let favoriteFilm_id = el.kinopoiskId || el.filmId;
            return movie_id === favoriteFilm_id
        })

        if(!isFavorite) {
            favoriteMovies.push(movie)
        } else {
            favoriteMovies.filter(el => {
                let movie_id = movie.kinopoiskId || movie.filmId;
                let favoriteFilm_id = el.kinopoiskId || el.filmId;
                return movie_id !== favoriteFilm_id
            })
        }

        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
    }

    
    return isFavorite;
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)