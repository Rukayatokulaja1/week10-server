import { useState } from "react";
import { login } from "../utils/login";

function Login({setIsLoggedIn}) {
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState()

    async function submitHandler(event) {
        event.preventDefault();
        console.log("submitHandler")
        const status = await login(email,username,password);
        if (status === 200) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        } 
    }
    return (
        <>
        <hr></hr>
        <form onSubmit = {submitHandler}>
          <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            <input onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
            <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
            <button type="submit">SUBMIT</button>
        </form>
        <hr></hr>
        </>
    )
}
 
export default Login;    