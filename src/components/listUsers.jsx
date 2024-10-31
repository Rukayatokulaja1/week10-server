import { useState } from "react";
import readCookie from "./utils/readCookie";

function ListUsers({setIsloggedIn}) {
    const [userList,setUderlist] = useState([]);
    async function clickHandler(event) {
        let token = readCookie("jwt_token");
        console.log(token);

        let authorization = "Bearer " + token;

        const res = await fetch(
            "http://localhost:5002/listAllUsers",
            {
                method: "GET",
                headers: {
                    "content-Type": "application/json",
                    "Authorization": authorization
                }
            }
        );
        let responseStatus = res.status;
        if(responseStatus === 200) {
            setUderlist(await res.json())
            console.log(userlist);
            setIsloggedIn(true);
        } else {
            console.log("userlist not found");
            setUderlist([]);
            
        }
    }
    return(
        <>
        <hr></hr>
        <h2>Authorized user</h2>
        <button onClick = {clickHandler}>Get latest List of User</button>
        <br></br>
        {
            userList.map((item,index) =>{
                return (
                    <>
                    <h3>Username = {item.username}</h3>
                    <h3>User Email = {item.email}</h3>
                    </>
                )
            }
        )
    }       
        </>

    )
}

export default ListUsers;