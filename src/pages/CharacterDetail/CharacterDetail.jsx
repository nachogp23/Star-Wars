//------------------START IMPORTS-----------------
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Import Local Files
import { useCharacters, useUser } from "../../hooks";
import { planetApi } from "../../services";
//------------------END IMPORTS------------------
const CharacterDetail = () => {
  //Invoke removeCharacter method from custom hoos useCharacters
  const { removeCharacter } = useCharacters();
  const { user } = useUser();
  const navigate = useNavigate();

  //Using state to receive the Character Data
  const { state } = useLocation();
  const { currentCharacter } = state;
  const { _id, name, mass, height, birth_year, gender, image, home_world } =
    currentCharacter;

  //On click delete Character and navigate to list after showing alarm i
  const handleDelete = () => {
    removeCharacter(_id);
    alert("Character deleted");
    navigate("/character-list");
  };

  //On click navigate to Edit page
  const handleEdit = () => {
    navigate("/edit-character", {
      state: { currentCharacter: currentCharacter },
    });
  };
  //On click navigate to Planet Detail page
  const goToPlanetDetail = () => {
    navigate("/planet-detail", { state: { currentPlanet: planet } });
  };

  //---------------------------EXTRA--------------------------
  const [planet, setPlanet] = useState({});
  //const [myFilms, setMyFilms] = useState([]);

  useEffect(() => {
    //Use Home_world atribute (Planet ID) of currentCharacter Object to call the required planet from API
    //Save the response from the call in planet State
    planetApi.getOne(home_world).then((res) => setPlanet(res.data));

    // console.log(films);
    // const filmss = [];
    // films.map((film) => (
    //   filmApi.getOne(film)
    //     .then(res => filmss.push(res.data))
    //     .then(setMyFilms(filmss))

    // )
    // );
    // setMyFilms(filmss)
    // console.log(myFilms)
  }, []);

  //---------------------------EXTRA--------------------------

  return (
    <div className="detail-page">
      <div className="detail-page__container">
        <img
          className="detail-page__container__img"
          src={image}
          alt="character"
        ></img>

        <div className="detail-page__container__text">
          <h1 className="detail-page__container__text__title">{name}</h1>
          <p className="detail-page__container__text__info">
            <span> Weight: </span>
            {mass} Kg
          </p>
          <p className="detail-page__container__text__info">
            <span> Height: </span>
            {height} cm
          </p>
          <p className="detail-page__container__text__info">
            <span> Gender: </span>
            {gender}
          </p>
          <p className="detail-page__container__text__info">
            <span> Birth Year: </span>
            {birth_year}
          </p>

          <div className="detail-page__container__text__planet">
            <span className="detail-page__container__text__planet__title">
              Born in:
            </span>
            <div className="detail-page__container__text__planet__imgCont">
              <img
                className="detail-page__container__text__planet__imgCont__img"
                src={planet.image}
                alt="planet"
              ></img>
              <span
                className="detail-page__container__text__planet__imgCont__link"
                onClick={goToPlanetDetail}
              >
                {planet.name}
              </span>
            </div>
          </div>
          {user && user._id ? (
            <div className="detail-page__container__text__buttons">
              <button
                className="detail-page__container__text__buttons__button detail-page__container__text__buttons__button--edit"
                onClick={handleEdit}
              >
                Edit Character
              </button>
              <button
                className="detail-page__container__text__buttons__button detail-page__container__text__buttons__button--delete"
                onClick={handleDelete}
              >
                Delete Character
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
