import { callApi } from "../utils/API";

export const getAllUsers = () => callApi('get', '/products');