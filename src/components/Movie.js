import { Link } from "react-router-dom";

function Movie({title, medium_cover_image, summary, genres}) {
    return (
        <div>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <img src={medium_cover_image} />
            <p>{summary}</p>
            <ul>
                {genres && genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

export default Movie;