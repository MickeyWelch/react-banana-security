import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider({children}){
    const [isAuth, toggleIsAuth] = useState(false)
    const history = useHistory();

    const data = {
        username: "123",
        password: "abc",
        email: "123@novi.nl",
        isAuthenticated: isAuth,
        signIn: logIn,
        signOut: logOut,
    }

    function logIn(){
        toggleIsAuth(true);
        history.push("/profile");
        console.log("gebruiker in ingelogd");
    }

    function logOut(){
        toggleIsAuth(false);
        history.push("/");
        console.log("gebruiker in uitgelogd");
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

