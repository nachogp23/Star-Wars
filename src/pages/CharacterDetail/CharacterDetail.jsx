import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCharacters, useFilms, usePlanets } from "../../hooks";
const CharacterDetail = () => {
  
  const { removeCharacter } = useCharacters();
  const navigate = useNavigate();
  
  //Using state to receive the Character Data
  const {state} = useLocation();
  const { currentCharacter } = state; 
  const { _id, name, mass, height, birth_year, gender, image, home_world, films } = currentCharacter;
 
  //On click delete Character and navigate to list after showing alarm i
  const handleDelete = () => {
    removeCharacter(_id);
    alert("Character deleted");
    navigate("/character-list"); 
  };

  //On click navigate to Edit page
  const handleEdit = () => {
    navigate("/edit-character", { state: { currentCharacter: currentCharacter } });
  };
  
  //---------------------------EXTRA--------------------------
  // const [_films, setfilms] = useState();
  // const [_planet, setPlanet] = useState();

  // useEffect(() => {
    
  //   getPlanets();
  //   getFilms();
    
  //   setPlanet(getPlanetsById(home_world))
  //   setfilms(films.map((film) => {return getFilmsById(film)}))
    
  // }, []);

  // const { getPlanets, getPlanetsById } = usePlanets();
  // const { getFilms, getFilmsById} = useFilms();
  //---------------------------EXTRA--------------------------
 
  return (
    <div className="details-page__container">
        <h1 className="planetDetails__title">{name}</h1>
       
        {/* <p><span> Name: </span>{name}</p> */}
        <p><span> Born in: </span>{}</p>
        {/* <p><span> Appears in: </span>{_films.map((film) => (film.title))}</p> */}


        
        <button onClick={handleDelete}>Delete Character</button>
        <button onClick={handleEdit}>Edit Character</button>
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

export default CharacterDetail;
