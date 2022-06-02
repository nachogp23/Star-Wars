import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

function FlipCardCharacter({ character }) {
  const navigate = useNavigate();
  const [showBack, setShowBack] = useState(false);

  const { name, mass, height, birth_year, image } = character;

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const handleDetail = () => {
    navigate("/character-detail", { state: { currentCharacter: character } });
  };

  return (
    <div className="flip-card-outer">
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
              <span>Height: </span>
              {height} m
            </p>
            <p className="card-text fs-5 fw-ligh">
              <span>Mass: </span>
              {mass} Kg
            </p>
            <p className="card-text fs-5 fw-ligh">
              <span>Birth Year: </span>
              {birth_year}
            </p>
            <button className="card-back__details" onClick={handleDetail}>
              Show Details
            </button>
            <button className="flip-button" onClick={handleClick}>
              SHOW FRONT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCardCharacter;
