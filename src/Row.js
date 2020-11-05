import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  //use state, short term memory, to keep track of the movies
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //Size for the trailer pop-up
 const opts = {
   height: "390",
   width: "100%",
   playerVars: {autoplay: 1}
 }

 const handleClick = (movie) => {
   if(trailerUrl) {
     setTrailerUrl("");
   } else {
     movieTrailer(movie?.name || "")
     .then((url) => {
       const urlParams = new URLSearchParams(new URL(url).search);
       setTrailerUrl(urlParams.get("v"));
     })
     .catch((error) => console.log(error));
   }
   console.log("the movie you clicked on in", movie.name)
   console.log( movie.backdrop_path)

   


 };

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* Now to render out the movies */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
