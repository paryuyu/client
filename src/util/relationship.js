import { responsivePropType } from "@mui/system";


/** get 요청일 때 : 리스트 목록 불러오기 */
export async function FriendsListFindAPI() {
    let jwt = localStorage.getItem('jwt')

    let res = await fetch(process.env.REACT_APP_SERVER_IP + "/relationship", {
        method: 'get',
        headers: {
            "authorization": "Bearer " + jwt,
            "Content-type": "application/json"
        }
    });

    return res;
}



/** post 요청일 때 : 친구 요청 보내기 */
//body로 requestedBy로 요청 받는 친구만 보내주기.
export async function FriendReqAPI(requestedBy) {
    let jwt = localStorage.getItem('jwt')
    let response = await fetch(process.env.REACT_APP_SERVER_IP + '/relationship', {
        method: 'put',
        body: JSON.stringify({ requestedBy: requestedBy }),
        headers: {
            "authorization": "Bearer " + jwt,
            "Content-type": "application/json"
        }
    })

    return response;

}

/**친구 허용 */
export async function FriendAccAPI(opponent){
    let jwt = localStorage.getItem('jwt')
    let response = await fetch(process.env.REACT_APP_SERVER_IP + '/relationship/acc',{
        method: 'put',
        body: JSON.stringify({ opponent: opponent }),
        headers: {
            "authorization": "Bearer " + jwt,
            "Content-type": "application/json"
        }

    })
    return response;


}

// export async function FriendDelAPI(opponent){
//     let jwt = localStorage.getItem('jwt')
//     let response = await fetch(process.env.REACT_APP_SERVER_IP + '/relationship/delete',{
//         method: 'put',
//         body: JSON.stringify({ opponent: opponent }),
//         headers: {
//             "authorization": "Bearer " + jwt,
//             "Content-type": "application/json"
//         }

//     })
//     return response;

// }