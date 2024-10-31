import writeCookie from "./writeCookie";

export async function login(email,username,password) {
    try {
        const res = await fetch(
            "http://localhost:5002/login",
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password
                    }
                )
            }
        )
        const data = await res.json();
        const token = data.token
        console.log(data.token);
        writeCookie("jwt_token", token, 2)
        
    } catch (error) {
        console.log(error);
    }
}


