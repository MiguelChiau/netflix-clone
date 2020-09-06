const API_KEY = "1404a8a5d955e5c6ca4b449937850496";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discovery/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discovery/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
