export const baseUrl = "http://localhost:3001";

export function getAllProperties() {
    return fetch(`${baseUrl}/properties`).then((response)=>{
        return response.json()
    })
}