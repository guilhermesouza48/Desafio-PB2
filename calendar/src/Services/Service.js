import axios from "axios";

export default class Service {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN + "/api",
    });
  }

  async login(dados) {
    const { data } = await this.axios.post("/Login", dados);

    if (data) {
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("token", data.token.token);

      return true;
    }

    return;
  }

  async registrar(dados) {
    return this.axios.post("/user", dados);
  }

  Autentication() {
    return localStorage.getItem("token") !== undefined ? true : false;
  }

  async logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }
}
