import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "c2944114329d40c899f72ec47444572f",
  },
});
