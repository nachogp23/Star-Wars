import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";


function FlipCardCharacter({ character }) {
  
  const navigate = useNavigate();
  const [showBack, setShowBack] = useState(false);

  const { name, mass, height, birth_year, gender, image, home_world, films } = character;

  const handleClick = () => {
    setShowBack(!showBack);
  };

  const handleDetail = () => {
    navigate("/character-detail", { state: { currentCharacter: character } });
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
            <h2 className="card-text fs-3 fw-bold card--title">{`Episode ${mass}`}</h2>
            <button className="flip-button" onClick={handleClick}>MORE INFO!</button>
           
            <button onClick={handleDetail}>Show Details</button>

          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly">
            <p className="card-text fs-5 fw-ligh"><span>Height: </span>{height}</p>
            <p className="card-text fs-5 fw-ligh"><span>Mass: </span>{mass}</p>
            <p className="card-text fs-5 fw-ligh"><span>Birth Year: </span>{birth_year}</p>
            <button className="flip-button" onClick={handleClick}>SHOW TITLE</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCardCharacter;
