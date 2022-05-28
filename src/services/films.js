//------------------START IMPORTS-----------------
import Axios from "axios";
//------------------END IMPORTS------------------

//Sabe Films API URL on a constant 
const baseFilmURL = "http://localhost:4500/films";

//Get All Films method
const getAll = () => {
    return Axios.get(`${baseFilmURL}/`);
         
 };
 //Get One Film By Id method
 const getOne = (id) => {
     return Axios.get(`${baseFilmURL}/${id}`);
          
  };

//Export all methods
export {getAll, getOne};