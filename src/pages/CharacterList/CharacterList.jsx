//------------------START IMPORTS-----------------
//import { NavLink } from "react-router-dom";
import { useEffect } from "react";
//Import Local Files
import {useCharacters} from "../../hooks";
import FlipCardCharacter from "../../components/FlipCardCharacter/FlipCardCharacter";
//------------------END IMPORTS------------------

function CharacterList() {

  //Use the custom hook to acces characters data
  const {characters, getCharacters} = useCharacters();

  //Get all character when the page is created
   useEffect(() => {
    getCharacters();
  }, [])

    return (

      <div className="container">
        <h1>Characters List</h1>
        <div className="row h-75">
          <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center cards-container">
            {characters.map((character) => (
              <FlipCardCharacter
              key={character.name}
              character={character} />
            ))}
          </div>
        </div>
      </div>      
         
    );     
};

export default CharacterList;
