import axios from "axios";
const tmdbinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
export default tmdbinstance;
