

export async function RegisterAPI(userinfo){

    let res = await fetch(process.env.REACT_APP_SERVER_IP+"/auth/register",{
        method:'post',
        body:JSON.stringify(userinfo),
        headers:{"content-type":"application/json"}
    });

    let json = await res.json();

    return json;
}


export async function LoginAPI(userinfo){

    let res = await fetch(process.env.REACT_APP_SERVER_IP+"/auth/login",{
        method:'post',
        body:JSON.stringify(userinfo),
        headers:{"content-type":"application/json"}
    });

    return res;
}



export async function TokenValidAPI(jwt){

    let res = await fetch(process.env.REACT_APP_SERVER_IP+"/auth/session",{
        method:'post',
        headers:{ "authorization": "Bearer " + jwt}
    });


    return res;
}