import axios from "axios";

const API_URL = "https://localhost:8443/api/auth/";

class AuthService {
  register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };

  login = (u, p) => {
    const credentials = {
      username: u,
      password: p
    };

    return axios
        .post(API_URL + "signin", credentials)
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
}

export default new AuthService();