import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //To randomly select a movie for the banner

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
      }}

    >
      

      {/* <div styles={{ backgroundImage: `url(${car})` }}></div> */}
      <div className="banner__contents">
        {/* some movies give either a title, a name or an original name */}
        <h1> {movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
    <h1 className="banner__description">{movie.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
