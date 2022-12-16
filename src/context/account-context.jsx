import { createContext, useEffect, useReducer, useState } from "react";
import { LoginAPI, TokenValidAPI } from "../util/account";

export const AccountContext = createContext();

// const authReducer = (state = null, action) => {
//     switch (action.type) {
//         case "login":
//             return action.payload;
//         case "logout":
//             return null;

//     }
// }



export function AccountContextProvider({ children }) {

    //토큰 인증값 지정해주기
    const [status, setStatus] = useState("loading");

    const [data, setData] = useState(null);

    //토큰 유효성 검사 : 토큰의 유효성 검사를 할 때는 서버 쪽으로 토큰을 보내줘서 서버에서 해주는게 좋음.
    const auth = async () => {
        let jwt = localStorage.getItem("jwt");
        if (!jwt) {
            setStatus("unauthenticated");
            return null;
        }

        let valid = await TokenValidAPI(jwt);

        if (valid.status === 200) {
            let data = await valid.json();
            setStatus("authenticated");
            setData(data);
            return data;
        } else {
            setStatus("unauthenticated");
            localStorage.removeItem("jwt");
            return null;
        }
    };


    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        auth();
    }, [status])

    async function Login(userInfo) {
        let login = await LoginAPI(userInfo);

        //로그인이 정상적으로 처리되면
        if (login.status === 200) {

            const json = await login.json();
            console.log(json.token);
            //토큰을 로컬스토리지에 넣어주고.
            localStorage.setItem("jwt", json.token);

            //토큰 유효성 검사를 한다.
            auth();
            return true;
        }

        return false;
    }


    const Logout = async () => {
        setStatus("unauthenticated");
        localStorage.removeItem("jwt")
    }

    return (<AccountContext.Provider value={{Login, Logout, data, status}}>
        {children}
    </AccountContext.Provider>)
}