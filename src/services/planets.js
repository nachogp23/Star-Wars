import Axios from "axios";
//------------------END IMPORTS------------------

//Sabe Planets API URL on a constant 
const basePlanetURL = "http://localhost:4500/planets";

//Get All Films method
const getAll = () => {
    return Axios.get(`${basePlanetURL}/`);
         
 };
 //Get One Film By Id method
 const getOne = (id) => {
     return Axios.get(`${basePlanetURL}/${id}`);
          
  };

//Export all methods
export {getAll, getOne};