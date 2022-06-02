//------------------START IMPORTS-----------------
import {useContext, useState, useEffect} from 'react';
//Import LOCAL files
import { filmApi } from "../services";
import  MainContext from '../context/MainContext';
//------------------END IMPORTS------------------
const useFilms = () => {

    const [films, setFilms] = useState([]);
    const { filmContext, setFilmContext } = useContext(MainContext);

    useEffect(() => {
        const getFilms = async () => {          
            try{await filmApi.getAll()
                 .then((res) => {
                     setFilmContext(res.data);
                     
                 });
             } catch (err) {
                 console.error(err);
             }                                 
         };
        if (!filmContext.length) {
          getFilms();
        } else {
          setFilms(filmContext);
        }
      }, [filmContext, setFilmContext]);

    //Method to get all Films from server and save it on context and films state
    const getFilms = async () => {          
       try{await filmApi.getAll()
            .then((res) => {
                setFilmContext(res.data);
                setFilms(res.data);
            });
        } catch (err) {
            console.error(err);
        }                                 
    };

    const getFilmsById = (id) => films.find(({ _id }) => _id === id);

    
    //Return the state with the films and all the defined methods
    return {
        films, 
        getFilms,
        getFilmsById,
    };           
};

export default useFilms;