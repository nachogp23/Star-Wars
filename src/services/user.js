//------------------START IMPORTS-----------------
import Axios from "axios";
//------------------END IMPORTS------------------

//Sabe API URL on a constant and the different endpoints
const registerEndPoint = "register";
const loginEndPoint = "signin";
const baseUserURL = "http://localhost:4500/users";

//Register method
const register = (data) => {
   return Axios.post(`${baseUserURL}/${registerEndPoint}`, data)
        
};

//Login method
const login = (data) => {
    return Axios.post(`${baseUserURL}/${loginEndPoint}`, data);
};



//Export all methods
export {register, login};