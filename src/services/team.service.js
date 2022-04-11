import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:8443/api/team";

const getTeam = () => {
  return axios
      .get(API_URL, {headers: authHeader()})
      .then((response) => {
        localStorage.setItem("team", JSON.stringify(response.data));
        return response.data;
      });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTeam,
};
