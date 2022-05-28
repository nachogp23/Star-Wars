import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

function FlipCardFilm({ film }) {
  
  const [showBack, setShowBack] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowBack(!showBack);
  };
  

 const {title, episode_id, director, producer, release_date } = film;

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
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly">
            <h1 className="card-text fs-1 fw-bold card--title">{title}</h1>
            <h2 className="card-text fs-3 fw-bold card--title">{`Episode ${episode_id}`}</h2>
            <button onClick={handleDetail}>Show Details</button>

            <button className="flip-button" onClick={handleClick}>MORE INFO!</button>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center card--dispaly">
            <p className="card-text fs-5 fw-ligh"><span>Director: </span>{director}</p>
            <p className="card-text fs-5 fw-ligh"><span>Producer: </span>{producer}</p>
            <p className="card-text fs-5 fw-ligh"><span>Release Date: </span>{release_date}</p>
            <button className="flip-button" onClick={handleClick}>SHOW TITLE</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCardFilm;
