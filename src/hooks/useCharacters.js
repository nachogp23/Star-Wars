//------------------START IMPORTS-----------------
import {useContext, useState, useEffect} from 'react';
//Import LOCAL files
import { characterApi } from "../services";
import  MainContext from '../context/MainContext';
import addTokenToHeader from '../interceptors/AxiosInterceptor';
//------------------END IMPORTS------------------
const useCharacters = () => {

    const [characters, setCharacters] = useState([]);
    const { characterContext, setCharacterContext } = useContext(MainContext);


    useEffect(() => {
        const getCharacters = async () => {          
            try{await characterApi.getAll()
                 .then((res) => {
                     setCharacterContext(res.data);
                     //setCharacters(res.data);
                 });
             } catch (err) {
                 console.error(err);
             }                                 
         };
        if (!characterContext.length) {
          getCharacters();
        } else {
          setCharacters(characterContext);
        }
      }, [characterContext, setCharacterContext]);

    //Method to get all Characters from server and save it on context and characters State
    const getCharacters = async () => {          
        try{await characterApi.getAll()
             .then((res) => {
                 setCharacterContext(res.data);
                 //setCharacters(res.data);
             });
         } catch (err) {
             console.error(err);
         }                                 
     };
    //Method to create new character using the data comming from the form in CreateCharacterPage
    const createCharacter = async ({name, height, mass, gender, birth_year, image}) => {
        try {
            addTokenToHeader();    
            await characterApi.add({name, height, mass, gender, birth_year, image});
            getCharacters();
            
        } catch (error) {
            console.error(error);
        }
    };

    //Method to create edit a character using ID and the data comming from the form in EditCharacterPage
    const editCharacter = async (id,{name, height, mass, gender, birth_year, image}) => {
        try {  
            addTokenToHeader();          
            await characterApi.edit(id,{name, height, mass, gender, birth_year, image});
            getCharacters();
        } catch (error) {
            console.error(error);
        }
    };

    //Method to remove a Character using ID
    const removeCharacter = async (id) => {
        try {
            addTokenToHeader();    
            await characterApi.remove(id);
            getCharacters();
        }
        catch (error) {
            console.log(error);
        }
    };

    //Return the state with the characters and all the defined methods
    return {
        characters, 
        setCharacters,
        createCharacter,
        removeCharacter,
        editCharacter,

    };           
};

export default useCharacters;