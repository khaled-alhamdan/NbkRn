import axios from "axios";

const instance = axios.create({
  baseURL: "https://karavatta.herokuapp.com/",
});

export const appendApi = (path) => `https://karavatta.herokuapp.com/${path}`;

export default instance;
