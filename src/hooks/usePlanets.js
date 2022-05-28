//------------------START IMPORTS-----------------
import {useContext, useState} from 'react';
//Import LOCAL files
import { planetApi } from "../services";
import  MainContext from '../context/MainContext';
//------------------END IMPORTS------------------
const usePlanets = () => {

    const [planets, setPlanets] = useState([]);
    const { setPlanetContext } = useContext(MainContext);

    //Method to get all Planets from server and save it on context and planets state
    const getPlanets = async () => {          
       try{await planetApi.getAll()
            .then((res) => {
                setPlanetContext(res.data);
                setPlanets(res.data);
            });
        } catch (err) {
            console.error(err);
        }                                 
    };

    const getPlanetsById = (id) => planets.find(({ _id }) => _id === id);
    

    //Return the state with the planets and all the defined methods
    return {
        planets, 
        getPlanets,
        getPlanetsById,
    };           
};

export default usePlanets;