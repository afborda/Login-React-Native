import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.b7web.com.br/devbarber/api",
});
