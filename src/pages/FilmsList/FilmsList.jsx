//------------------START IMPORTS-----------------
//Import Local Files
import {useFilms} from "../../hooks";
import FlipCardFilm from "../../components/FlipCardFilm/FlipCardFilm";
//------------------END IMPORTS------------------

function FilmList() {
  
  //Use the custom hook to acces films data
  const {films} = useFilms();

   return (
      <div className="row h-75">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center cards-container">
          {films.map((film) => (           
            <FlipCardFilm 
            key={film._id} 
            film={film} />
          ))}
        </div>
      </div>
  );
}

export default FilmList;
