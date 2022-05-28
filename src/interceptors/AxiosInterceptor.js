import Axios from "axios";


const getToken = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user)?.token : null; 
}

const addTokenToHeader = () => {
    const token = getToken();
    console.log(token);

    if(token === null) {
      return console.log("No token provided");
    } else { 
      Axios.interceptors.request.use(
        (req) => {
          req.headers["Authorization"] = `Bearer ${getToken()}`;
          //console.log(req.headers)
          return req;
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    };
};

export default  addTokenToHeader;