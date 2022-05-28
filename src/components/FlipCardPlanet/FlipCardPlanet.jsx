import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

function FlipCardFilm({ planet }) {
  
  const [showBack, setShowBack] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowBack(!showBack);
  };
  
 const { name, rotation_period, orbital_period, diameter, climate, terrain, population, image, characters, films } = planet;

 const handleDetail = () => {
  navigate("/planet-detail", { state: { currentPlanet: planet } });
};

  return (
    <div className="flip-card-outer" >
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly">
            <h1 className="card-text fs-1 fw-bold card--title">{name}</h1>
            <h2 className="card-text fs-3 fw-bold card--title">{`Episode ${climate}`}</h2>
            <button onClick={handleDetail}>Show Details</button>

            <button className="flip-button" onClick={handleClick}>MORE BACK</button>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly">
            <p className="card-text fs-5 fw-ligh"><span>Director: </span>{population}</p>
            <button className="flip-button" onClick={handleClick}>SHOW FRONT</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCardFilm;
