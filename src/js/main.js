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
        const liked_btn = document.createElement('img')
        liked_btn.classList.add('main__movie_liked_btn');
        liked_btn.innerHTML = '<i class="fa-regular fa-heart main__movie_liked_btn"></i>'

        const liked_btn_clicked = document.createElement('img');
        liked_btn_clicked.classList.add('main__movie_liked_btn_clicked')
        liked_btn_clicked.innerHTML = '<i class="fa-solid fa-heart main__movie_liked_btn"></i>'


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
            // console.log(saved_btn)
            saved_btn.addEventListener('clicked', (el) => {
                console.log(el.target)
            })
            

            movies.appendChild(movie)

        })

        // console.log(liked_btn)

    }
}


document.addEventListener('DOMContentLoaded', onDOMContentLoaded)