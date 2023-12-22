import axios from "axios"

export default async function CheckUser(email,password) {
    return await axios.post("http://localhost:38106/api/Users/CheckUser",{
        Email: email,
        Password: password
    });
}