//------------------START IMPORTS-----------------
import { NavLink, useNavigate } from "react-router-dom";
//Import LOCAL files
import { useUser } from "../../hooks";
//------------------END IMPORTS------------------

export default function NavBar() {
  const { user, logout } = useUser();

  const navigate = useNavigate();

  //Function to execute logout method and redirect to Home Page
  const logOut = () => {
    logout();
    navigate("/");
  };
  const userInfo = () => {
    navigate("/user-info", { state: { currentUser: user } });
  };

  //Render Navigation Bar.
  //If User is Logged show LogOut button, else show Login button
  return (
    <nav className="navBar">
      <div className="navBar__imgCont">
        <img
        className="navBar__imgCont__img"
          alt=""
          src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg"
        ></img>
      </div>

      <div className="navBar__links">
        <NavLink className="navBar__links__link" to="/">
          Home
        </NavLink>
        <NavLink className="navBar__links__link" to="/character-list">
          Characters
        </NavLink>
        <NavLink className="navBar__links__link" to="/planet-list">
          Planets
        </NavLink>
        <NavLink className="navBar__links__link" to="/film-list">
          Films
        </NavLink>
      </div>

      <div className="navBar__user">
        {user && user._id ? (
          <>
            
            <p className="navBar__user__name">Logged as {user.name}</p>
            
            <div className="navBar__user__buttonsCont">
              <button className="navBar__user__buttonsCont__button navBar__user__buttonsCont__button--info" onClick={userInfo}>
                User Info
              </button>
              <button className="navBar__user__buttonsCont__button navBar__user__buttonsCont__button--logout" onClick={logOut}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          // <button className="navBar__links__button" onClick={userInfo}>User Info</button>
          <NavLink className="navBar__links__link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
