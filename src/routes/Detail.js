import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/detail.css";

function Detail(){
    const {id} = useParams();
    const [json, setJson] = useState({});

    const getMovie = async () => {
        const movie_info = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(movie_info);
        setJson(movie_info);
    };

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        if (json.data && json.data.movie){
            console.log(json.data);
        }
    }, [json]);

    
    return (
        <div className="detail">
            <h1>{(json.data && json.data.movie) ? json.data.movie.title : "Loading..."}</h1>
            {(json.data && json.data.movie) ? 
            <div>
                <img src={json.data.movie.large_cover_image}/>
                <p>rating : {json.data.movie.rating}</p>
                <p>year : {json.data.movie.year}</p>
                <p>runtime : {json.data.movie.runtime}</p>
                <h5>description</h5>
                <p>{json.data.movie.description_full}</p>
            </div>

            : null}
            
        </div>
    )
}

export default Detail;