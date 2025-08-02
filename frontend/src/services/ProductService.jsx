import { callApi } from "../utils/API";

const getAllProducts = () => callApi('get', '/products')
    .then(data => {
        return data;
    })
    .catch(err => console.error("Error:", err));

export default getAllProducts
