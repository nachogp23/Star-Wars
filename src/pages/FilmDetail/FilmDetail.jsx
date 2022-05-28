import { useLocation, useNavigate } from "react-router-dom";
const FilmDetail = () => {

  const navigate = useNavigate();

  const {state} = useLocation();
  const { currentFilm } = state; 
  const { title, episode_id, director, producer, release_date } = currentFilm;

  


  return (
    <div className="details-page__container">
        {/* <h1 className="planetDetails__title">{details.name}</h1> */}
       
        <p><span> title: </span>{title}</p>
        {/* <p><span> Population: </span>{details.population}</p>
        <p><span> Diameter: </span>{details.diameter}</p>
        <p><span> Gravity: </span>{details.gravity}</p>
        <p><span> Orbital period: </span>{details.orbital_period}</p>
        <p><span> Rotation period: </span>{details.rotation_period}</p>
        <p><span> Surface water: </span>{details.surface_water}</p>
        <p><span> Terrain: </span>{details.terrain}</p> */}
        {/* <p>{details.films}</p> */}
        
        
    </div>

  )
};

export default FilmDetail;
