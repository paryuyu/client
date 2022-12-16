import { Box, Typography } from "@mui/material";
import * as React from 'react';

import Friends from "../../components/friends/friends-left";
import FriendsRight from "../../components/friends/friends-right";
import { AccountContext } from "../../context/account-context";
import { io } from 'socket.io-client';

export default function Mepage() {
let ctx = React.useContext(AccountContext);

    React.useEffect(()=>{

        //웹소켓
        // console.log('소켓 연결시도')
        // console.log(ctx.data)
        // //최초 커넥션이 될 때 쿼리정보도 같이 서버로 넘어감.
        if(ctx.data){

        const socket = io(process.env.REACT_APP_SERVER_IP,{query:{userId:ctx.data.user.email}});
            
        socket.on('add-friend-request',(data)=>{
            console.log('add-friend-request => ',data)
        })


        return ()=>{ socket.disconnect();}

        }


    

        // socket id같은 value 값은 on 이벤트 발생 함수 안에서만 돌아간다.

        // console.log('connect', socket.id) 
        // socket.on('connect',()=>{
        //     console.log('connect', socket.id)
        // })
        // //서버측에서 보내줌 emit을 클라에서는 on으로 보내온다.
        // socket.on('welcome',(data)=>{
        //     console.log(data,'welcome received---!')
        //     console.log('클라측에 부여된 id값:',socket.id)
        // })

        // socket.on('newUser!',(data)=>{
        //     console.log('newUser!=>',data)
        // })
        
        // socket.on('private',(data)=>{
        //     console.log('private => ',data)
        // })
    },[])

    return (<>
        <Box sx={{ display:'flex' , height:'100%'}}>
            <Friends />
        <Box>
            <FriendsRight/>
        </Box>

        </Box>



        <></>


    </>)
}