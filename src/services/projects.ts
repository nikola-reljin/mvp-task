import axios from "axios";
import { BASE_API_URL } from "./url";

const getAll = () => {
  return axios.get(`${BASE_API_URL}/projects`);
};

const projectsApi = {
  getAll,
};

export default projectsApi;
