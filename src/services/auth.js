const baseUrl = "http://localhost:3001";

export function registerUser(newUser){
    return fetch(`${baseUrl}/users`,{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser),
    }).then((Response)=>Response.json())
}