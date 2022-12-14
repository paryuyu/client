import { createContext, useEffect, useReducer, useState } from "react";

export const AccountContext = createContext();

const authReducer = (state = null, action) => {
    switch (action.type) {
        case "login":
            return action.payload;
        case "logout":
            return null;

    }
}

export function AccountContextProvider({ children }) {
    const [auth, dispatch] = useReducer(authReducer);

    let jwt = localStorage.getItem("jwt");
    const [token, setToken] = useState(jwt);



    return (<AccountContext.Provider value={{ auth, dispatch, setToken }}>
        {children}
    </AccountContext.Provider>)
}