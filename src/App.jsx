//------------------START IMPORTS-----------------
import React from "react";
import { Routes, Route } from "react-router-dom";
//Import LOCAL files
import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CharacterList from "./pages/CharacterList/CharacterList";
import CreateCharacter from "./pages/CreateCharacter/CreateCharacter";
import EditCharacter from "./pages/EditCharacter/EditCharacter";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import PlanetList from "./pages/PlanetsList/PlanetList";
import PlanetDetail from "./pages/PlanetDetail/PlanetDetail";
import FilmList from "./pages/FilmsList/FilmsList";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import UserInfo from "./pages/userInfo/UserInfo";

//------------------END IMPORTS------------------

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="character-list" element={<CharacterList />} />
        <Route path="create-character" element={<CreateCharacter />} />
        <Route path="edit-character" element={<EditCharacter />} />
        <Route path="character-detail" element={<CharacterDetail />} />

        <Route path="planet-list" element={<PlanetList />} />
        <Route path="planet-detail" element={<PlanetDetail/>} />
        
        <Route path="film-list" element={<FilmList />} />
        <Route path="film-detail" element={<FilmDetail />} />
        
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user-info" element={<UserInfo />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
