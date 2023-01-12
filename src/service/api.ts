import axios from 'axios';

const res = async () => {
    const res = axios.post("/register", {
      name: "teste",
      email: "teste@gmail.com",
      password: "teste123" 
    })
    
    return await res
}
console.log(res)