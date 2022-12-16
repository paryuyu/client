

//리스트 목록 불러오는 함수 만들기 -> 미들웨어에서 자꾸 걸림.
export async function FriendsListFindAPI(){
    let jwt = localStorage.getItem('jwt')
   
    let res = await fetch(process.env.REACT_APP_SERVER_IP+"/relationship",{
       headers:{ "authorization": "Bearer " + jwt,
        "Content-type": "application/json"}
    });

    return res;
}