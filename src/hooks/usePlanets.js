//------------------START IMPORTS-----------------
import {useContext, useState, useEffect} from 'react';
//Import LOCAL files
import { planetApi } from "../services";
import  MainContext from '../context/MainContext';
//------------------END IMPORTS------------------
const usePlanets = () => {

    const [planets, setPlanets] = useState([]);
    const { planetContext, setPlanetContext } = useContext(MainContext);

    //Method to get all Planets from server and save it on context and planets state
    useEffect(() => {
        const getPlanets = async () => {          
            try{await planetApi.getAll()
                 .then((res) => {
                     setPlanetContext(res.data);
                 });
             } catch (err) {
                 console.error(err);
             }                                 
         };
        if (!planetContext.length) {
          getPlanets();
        } else {
          setPlanets(planetContext);
        }
      }, [planetContext, setPlanetContext]);
    
    

    const getPlanetsById = (id) => planets.find(({ _id }) => _id === id);
    

    //Return the state with the planets and all the defined methods
    return {
        planets, 
        
        getPlanetsById,
    };           
};

export default usePlanets;