import { useLocation, useNavigate } from "react-router-dom";
const PlanetDetail = () => {

  const navigate = useNavigate();

  const {state} = useLocation();
  const { currentPlanet } = state; 
  const { name, rotation_period, orbital_period, diameter, climate, terrain, population, image, characters, films } = currentPlanet;

  


  return (
    <div className="detail-page">
      
      <div className="detail-page__container">
        
        
        <img className="detail-page__container__img" src={image} alt="character"></img>
        
        <div className="detail-page__container__text">
          <h1 className="detail-page__container__text__title">{name}</h1>
          <p className="detail-page__container__text__info">
            <span> rotation reriod: </span>
            {rotation_period} days
          </p>
          <p className="detail-page__container__text__info">
            <span> orbital period: </span>
            {orbital_period} days
          </p>
          <p className="detail-page__container__text__info">
            <span> diameter: </span>
            {diameter} m
          </p>
          <p className="detail-page__container__text__info">
            <span> climate: </span>
            {climate}
          </p>
          <div className="detail-page__container__text__info" >
            <span> terrain: </span>
            <ul>
              {terrain.map((terrain) => (
                <li>{terrain}</li>
              ))}
            </ul>           
          </div>
          <p className="detail-page__container__text__info" >
            <span> pupulation: </span>
            {population} 
          </p>
          
        </div>

      </div>

    </div>
  

  )
};

export default PlanetDetail;
