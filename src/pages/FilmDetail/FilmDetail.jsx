import { useLocation, useNavigate } from "react-router-dom";
const FilmDetail = () => {
  //const navigate = useNavigate();

  const { state } = useLocation();
  const { currentFilm } = state;
  const { title, episode_id, director, producer, release_date, image } =
    currentFilm;

  return (
    <div className="detail-page">
      <div className="detail-page__container">
        <img
          className="detail-page__container__img"
          src={image}
          alt="film"
        ></img>

        <div className="detail-page__container__text">
          <h1 className="detail-page__container__text__title">{title}</h1>
          <p className="detail-page__container__text__info">
            <span> episode number: </span>
            {episode_id} 
          </p>
          <p className="detail-page__container__text__info">
            <span> release date: </span>
            {release_date} 
          </p>
          <p className="detail-page__container__text__info">
            <span> director: </span>
            {director} 
          </p>
          
          <div className="detail-page__container__text__info">
            <span> producers: </span>
            <ul>
              {producer.map((producer) => (
                <li>{producer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
