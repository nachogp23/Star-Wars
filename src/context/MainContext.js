//------------------START IMPORTS-----------------
import { createContext, useState } from "react";
//------------------END IMPORTS------------------

//Create the context to store data available for all the componentsnad pages
const Context = createContext({});

export const MainContext = ({ children }) => {
  const [characterContext, setCharacterContext] = useState([]);
  const [planetContext, setPlanetContext] = useState([]);
  const [filmContext, setFilmContext] = useState([]);
  const [userContext, setUserContext] = useState({});

  //Provide in the context all the info about characters, planets, films and users, and the methods to modify the stored data for each one
  return (
    <Context.Provider
      value={{
        characterContext,
        setCharacterContext,
        planetContext,
        setPlanetContext,
        filmContext,
        setFilmContext,
        userContext,
        setUserContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
