//------------------START IMPORTS-----------------
import {useContext, useEffect, useState} from 'react';
//Import LOCAL files
import { userApi } from "../services";
import  MainContext from '../context/MainContext';
//------------------END IMPORTS------------------

const useUsers = () => {
    
    const [user, setUser] = useState();
    const { userContext, setUserContext } = useContext(MainContext);

    useEffect(() => {

        function checkLogin() {
            const _user = localStorage.getItem("userData");
            _user && setUserContext(JSON.parse(_user));
        }
        !userContext && checkLogin();
        userContext && setUser(userContext);
    }, [userContext, setUserContext]);

    //Function to execute register method
    const register = async ({name, email, password, character}) => {
        try {
           await userApi.register({name, email, password, character})
                
            
        } catch (error) {
            console.error(error);
        }
    };
    
    //Function to execute login method,and then if the login is correct
    //pas the user info to the context and persist it on Local Storage
    const login = async ({email, password}) => {
        try {
            const  userInfo  = await userApi.login({email, password})
            if (userInfo) {
               //setUserContext({userID: userInfo.data._id});
               setUserContext(userInfo.data);
               persistUserData(userInfo.data);
            } else {
                console.log("No user found")
            }
        } catch (error) {
            console.error(error);

        }
    };

    //Function to persist user Info on Local Storage, including the Authentication Token
    const persistUserData = ({_id, token}) => {
        const user = JSON.stringify({token: token, id: _id})
        localStorage.setItem("userData", user);
    }

    //Function to get the Token from Local Storage
    const getToken = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user)?.token : null; 
    }

    // Function to logout. Remove the data from Local Storage and Context
    const logout = () => {
        localStorage.removeItem('userData');
        setUserContext([]);
    }

    return {
        user,
        register,
        login,
        getToken,
        logout,
    }
}

export default useUsers
