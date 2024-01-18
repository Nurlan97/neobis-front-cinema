const onDOMContentLoaded = () => {

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth()
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    const currentMonth = months[currentMonthIndex];

    const API_KEY = 'b8af480e-35dc-41c4-a7fd-7134b7a73086';
    const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2024&month=${currentMonth}&page=1`;

    const fetchCurrentMonthDigitalReleases = async() => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type':'application/json'
            }
        })

        const content = await response.json();
        // console.log(content)
        showCurrentMonthDigitalReleases(content);
    }

    fetchCurrentMonthDigitalReleases()

    const showCurrentMonthDigitalReleases = (data) => {
        const movies = document.querySelector('.digitalReleases__movies');

        console.log(data)

        data.releases.forEach(el => {
            const movie = document.createElement('div');
            movie.classList.add('digitalReleases__movie')
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

            movies.appendChild(movie);
        })
    }

}


document.addEventListener('DOMContentLoaded', onDOMContentLoaded)