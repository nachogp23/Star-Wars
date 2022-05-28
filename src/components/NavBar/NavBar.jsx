//------------------START IMPORTS-----------------
import { NavLink, useNavigate } from "react-router-dom";
//Import LOCAL files
import { useUser } from "../../hooks";
//------------------END IMPORTS------------------

export default function NavBar() {

  const { user, logout } = useUser();

  const navigate=useNavigate();

  //Function to execute logout method and redirect to Home Page
  const handleClilck = () => {
    logout();
    navigate("/");
  }
  
  //Render Navigation Bar. 
  //If User is Logged show LogOut button, else show Login button
  return (
    <nav className="navBar"> 
      <div className="navBar__links" >
        <NavLink className="navBar__links__link" to="/">Home</NavLink>
        <NavLink className="navBar__links__link" to="/character-list">Characters</NavLink>
        <NavLink className="navBar__links__link" to="/planet-list">Planets</NavLink>
        <NavLink className="navBar__links__link" to="/film-list">Films</NavLink>
        {user && user._id ? (
          <button className="navBar__links__button" onClick={handleClilck}>Log Out</button>
        ) : (
          <NavLink className="navBar__links__link" to="/login">Login</NavLink>
        )}        
      </div>

      <div className="navBar__img" >
        <img
          alt=""
          src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg"
        ></img>
      </div>
    </nav>
  );    


}
