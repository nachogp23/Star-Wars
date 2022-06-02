//------------------START IMPORTS-----------------
import { useNavigate } from "react-router-dom";
//Import Local Files
import { useCharacters, useUser } from "../../hooks";
import FlipCardCharacter from "../../components/FlipCardCharacter/FlipCardCharacter";
//------------------END IMPORTS------------------

function CharacterList() {
  const navigate = useNavigate();

  const goToCreateCharacter = () => {
    navigate("/create-character");
  };

  //Use the custom hook to acces characters data
  const { characters } = useCharacters();
  const { user } = useUser();

  return (
    <div className="row h-75">
      <div className="character-list">
        {user && user._id ? (
          <button
            className="character-list__button"
            onClick={goToCreateCharacter}
          >
            Create your character
          </button>
        ) : (
          <h2 className="character-list__warning">
            Login to create a new Character
          </h2>
        )}
      </div>

      <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center cards-container">
        {characters.map((character) => (
          <FlipCardCharacter key={character._id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
