import { createContext, useEffect, useReducer, useState } from "react";

export const RelactionContext = createContext();

export function RealtionShipProvider({ children }) {
    let [acc, setAcc] = useState(false)
    
    function RelationStateUpdate (){
        setAcc(true)
    }


    return (
        <RelactionContext.Provider value={{RelationStateUpdate,acc}}>
            {children}
        </RelactionContext.Provider>

    )

}