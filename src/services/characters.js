//------------------START IMPORTS-----------------
import Axios from "axios";
//------------------END IMPORTS------------------

//Sabe Characters API URL on a constant 
const baseUserURL = "http://localhost:4500/characters";

//Get All Characters method
const getAll = () => {
   return Axios.get(`${baseUserURL}/`);
        
};
//Get One Characte By Id method
const getOne = (id) => {
    return Axios.get(`${baseUserURL}/${id}`);
         
 };

//Create New Character method
const add = (data) => {
    return Axios.post(`${baseUserURL}/`, data);
};

//Edit Character method
const edit = (id, data) => {
    return Axios.put(`${baseUserURL}/${id}`, data);
};

//Remove Character method
const remove = (id) => {
    return Axios.delete(`${baseUserURL}/${id}`);
};

//Export all methods
export {getAll, getOne, add, edit, remove};