import axios from "axios";

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      url: '/calendar/src/Pages/Login'
    })
  }

  async login(dados) {
    const { data } = await this.axios.post("/login", dados);

    if (data) {
      localStorage.setItem("name", data.user.name)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.user.token)

      return true;
    }

    return
  }

  async registrar(dados) {
    return this.axios.post('/user', dados);
  }

  Autentication() {
    return localStorage.getItem("token") !== undefined ? true : false;
  }


  // logout
  async logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }
}
