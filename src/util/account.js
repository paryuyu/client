let serverIp = 'http://192.168.4.25:8080'

export async function RegisterAPI(userinfo){

    let res = await fetch(serverIp+"/auth/register",{
        method:'post',
        body:JSON.stringify(userinfo),
        headers:{"content-type":"application/json"}
    });

    let json = await res.json();

    return json;
}


export async function LoginAPI(userinfo){

    let res = await fetch(serverIp+"/auth/login",{
        method:'post',
        body:JSON.stringify(userinfo),
        headers:{"content-type":"application/json"}
    });

    let json = await res.json();
    return json;
}