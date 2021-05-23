const API_KEY = 'b9465a752c5628878d172abc945ae344';
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class MoviesService {

  static async search(searchTerm, pageNumber = 1) {
    const result = await fetch(
      `${ROOT_URL}/search/movie?query=${searchTerm}&page=${pageNumber}&include_adult=false&api_key=${API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        }
      }
    );

    if (result.status === 404) throw new Error('Page not found');
    const resultJson = await result.json();
    return resultJson.results;
  }

  static async getMovie(id){
    const movie = await fetch(
      `${ROOT_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    )
    if (movie.status === 404) throw new Error('Page not found');
    const resultJson = await movie.json();
    return resultJson;
  }

  static async getGenreMovies(genreID, page){
    const listOfMovies = await fetch(
      `${ROOT_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&include_adult=false&with_genres=${genreID}`,
    )

    if (listOfMovies.status === 404) throw new Error('Page not found');
    const resultJson = await listOfMovies.json();
    return resultJson.results;
  }

  static async getCast(movieId){
    const cast = await fetch(
      `${ROOT_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    if (cast.status === 404) throw new Error('Page not found');
    const resultJson = await cast.json();
    return resultJson;
  }

  static async genreList() {
    const listOfGenres = await fetch(
      `${ROOT_URL}/genre/movie/list?api_key=${API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8',
        }
      }
    );

    if (listOfGenres.status === 404) throw new Error('Page not found');

    const resultJson = {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
    return resultJson;
  }
}
