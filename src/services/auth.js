export const baseUrl = "http://localhost:3001";

export function registerUser(newUser){
    return fetch(`${baseUrl}/users`,{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser),
    }).then((Response)=>Response.json())
}

export function loginUser(email,password){
    return fetch(`${baseUrl}/users?email=${email}`)
    .then((response) => response.json())
    .then((users)=>{
        const user = users[0];
        localStorage.setItem("userId",user.id)
    })
}

export function logOut(){
    localStorage.removeItem("userId")
}