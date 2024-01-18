const onDOMContentLoaded = () => {
    const API_KEY = 'b8af480e-35dc-41c4-a7fd-7134b7a73086';
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=CLOSES_RELEASES&page=1';

    
    // console.log(movies)

    

    const fetchTopAnticipatedMovies = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                }
            })

            const content = await response.json();
            showTopAnticipatedMovies(content)

        }catch(err){
            console.log(err)
        }
    
    }

    fetchTopAnticipatedMovies()

    const showTopAnticipatedMovies = (data) => {
        const movies = document.querySelector('.topAnticipated__movies');
        // console.log(data)
        
        data.items.forEach(el => {
            console.log(el)
            const movie = document.createElement('div');
            movie.classList.add('topAnticipated__movie');
            movie.innerHTML = `
                <div class="topAnticipated__movie_img_container">
                    <img src="${el.posterUrl}"
                    alt="" class="topAnticipated__movie_img">
                </div>
                <div class="topAnticipated__movie_card_info">
    
                    <div class="topAnticipated__movie_info">
                        <h2 class="topAnticipated__movie_title">${el.nameRu}</h2>
                        <p class="topAnticipated__movie_category">${el.genres.map(el => el.genre).join(', ')}</p>
                    </div>
                    <div class="topAnticipated__movie_rating topAnticipated__movie_rating_green">${el.ratingKinopoisk}</div>
                    <i class="fa-regular fa-heart topAnticipated__movie_liked_btn"></i>
                    <!-- <i class="fa-solid fa-heart topAnticipated__movie_liked_btn"></i> --> 
                </div>
            `
            movies.appendChild(movie)
        })


    }
}


document.addEventListener('DOMContentLoaded', onDOMContentLoaded)