import axios from "axios"


export const api = axios.create({
  baseURL: "http://localhost:3000/"
}) 

export const createSession = async () => {
  return await axios.post("http://localhost:3000/register", {
      name: "teste",
      email: "teste@gmail.com",
      passoword: "teste12322",
    })

}

 