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
    console.log(jwt)
    // setItem (토큰 저장은 로그인 시에 함)
    // getItem 은 토큰 불러오는거 -> 얘의 유효성 검사를 위해 서버로 날려줘야함. 
    // 서버로 날려주는거 여기서 useEffect로 하기
    console.log(process.env.REACT_APP_SERVER_IP)

    async function TokenVerify(){
        let response = await fetch(process.env.REACT_APP_SERVER_IP+"/auth/session",{
            method:'post',
            headers:{'authorization':'Bearer '+jwt}
        })

        

    }


useEffect(()=>{
console.log(process.env.REACT_APP_SERVER_IP)
TokenVerify()

},[])







    return (<AccountContext.Provider value={{ auth, dispatch, setToken }}>
        {children}
    </AccountContext.Provider>)
}