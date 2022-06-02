import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

function FlipCardFilm({ film }) {
  
  const [showBack, setShowBack] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowBack(!showBack);
  };
  

 const {title, image, episode_id, director, release_date } = film;

 const handleDetail = () => {
  navigate("/film-detail", { state: { currentFilm: film } });
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
            <h1 className="card-body__title card-body__title--film">{title}</h1>
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
              <span>Episode: </span>
              {episode_id}
            </p>
            <p className="card-text fs-5 fw-ligh text-center">
              <span>Director: </span>
              {director} 
            </p>
            <p className="card-text fs-5 fw-ligh text-center">
              <span>Release Date: </span>
              {release_date} 
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
