import axios from "axios";

export const axiosInstance = axios.create({
  // local base url
  // baseURL: "http://127.0.0.1:5001/clone-416ee/us-central1/api",
  //
  // render.com deployed amazon server
  baseURL: "https://amazon-api-deploy-g8ku.onrender.com",
});
