import axios from "axios";

axios.defaults.baseURL = "https://travel-tickr-api-e57198555b47.herokuapp.com/"; //url to api
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"; // multipart necessary since we have both text and images
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
