import { api } from "../config";

export const checkToken = async (token) => {
  try {
    const tokenRefresh = await api.post("/auth/refresh", token);
    console.log("tokenRefresh>>>>>>>>>>>>>>>>>>>>>>>>>>", tokenRefresh.token);

    return tokenRefresh;
  } catch (err) {
    return err;
  }
};

export const signIn = async (credentials) => {
  try {
    const login = await api.post("/auth/login", credentials);

    return login.data;
  } catch (err) {
    alert(err.error);
  }
};
export const signUp = async (credentials) => {
  try {
    const register = await api.post("/user", credentials);

    return register.data;
  } catch (err) {
    console.log(err);
    alert(err);
  }
};
