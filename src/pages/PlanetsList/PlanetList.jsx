//------------------START IMPORTS-----------------
//Import Local Files
import {usePlanets} from "../../hooks";
import FlipCardPlanet from "../../components/FlipCardPlanet/FlipCardPlanet";
//------------------END IMPORTS------------------

function PlanetList() {
  
  //Use the custom hook to acces films data
  const { planets } = usePlanets();

  return (
      <div className="row h-75">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center cards-container">
          {planets.map((planet) => (           
            <FlipCardPlanet 
            key={planet._id} 
            planet={planet} />
          ))}
        </div>
      </div>
  );
}

export default PlanetList;
