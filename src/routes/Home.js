import { useState, useEffect } from "react";
import Movie from "../components/Movie"

function Home(){
    const [loading, setLoading] = useState(true); //로딩중인지 아닌지 
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>{
        movies.map((movie) => 
          <Movie title={movie.title} medium_cover_image={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
        )}
      </div>}
    </div>
  )
}

export default Home;