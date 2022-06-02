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
          <div className="card-body">
            <h1 className="card-body__title">{name}</h1>
            <div className="card-body__imgCont">
              <img
                src={image}
                className="card-body__imgCont__img"
                alt="character"
              ></img>
            </div>
            <button className="flip-button" onClick={handleClick}>
              Show Back
            </button>
          </div>
        </div>
        <div className="card back card-back">
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly card-back">
            <p className="card-text fs-5 fw-ligh">
              <span>Rotation period: </span>
              {rotation_period} days
            </p>
            <p className="card-text fs-5 fw-ligh">
              <span>Orbital Period: </span>
              {orbital_period} days
            </p>
            <p className="card-text fs-5 fw-ligh">
              <span>Diameter: </span>
              {diameter} m
            </p>
            <button className="card-back__details" onClick={handleDetail}>Show Details</button>
            <button className="flip-button" onClick={handleClick}>
              SHOW FRONT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCardFilm;
