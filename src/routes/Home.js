import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "../style/home.css";

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
    <div className="home">
      <h1>Best Movies</h1>
      {loading ? <h2>Loading...</h2> : 
      <div>
        <p id="guide">Click on the title to learn more.</p>
        <div>{
          movies.map((movie) => 
            <Movie title={movie.title} 
            id={movie.id} 
            medium_cover_image={movie.medium_cover_image} 
            summary={movie.summary} 
            genres={movie.genres}
            key={movie.id} />
          )}
        </div>
      </div>}
    </div>
  )
}

export default Home;