import React from "react";
import axios from "axios";

function Row({ title, fetchURL }) {
  //use state, short term memory, to keep track of the movies
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
