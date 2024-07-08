import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../style/movie.css";

function Movie({title, id, medium_cover_image, genres}) {
    return (
        <div className="movie">
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={medium_cover_image} />
            <ul>
                {genres && genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
            <hr />
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;