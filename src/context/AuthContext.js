import React from "react";

const AuthContext = React.createContext(null);

function AuthContextProvider ( {children} ) {
    return ( <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;