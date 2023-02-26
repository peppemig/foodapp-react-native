import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Z_pCp_lurd5Pe_HYn8xn8-3i5ECFdqPrrlVCIQ1NHdomxFVaAItBuX0cWifMexbvSLzRr9hJUTp0mfs6feWx1AyNQoPKBxeqlUmGJzgMNROiFN2SOE9tldBqkOj5Y3Yx"
    }
})