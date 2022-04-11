import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:8443/api/clubs";

const getAllClubs = async () => {
  try {
    return await axios.get(API_URL, {headers: authHeader()});
  } catch (err) {
    console.error(err);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllClubs,
};
