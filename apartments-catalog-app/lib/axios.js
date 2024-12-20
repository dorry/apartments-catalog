import axios from "axios";

const api = axios.create({
  baseURL:
    typeof window == "undefined"
      ? process.env.API_URL
      : process.env.CLIENT_API_URL,
});

export { api };
