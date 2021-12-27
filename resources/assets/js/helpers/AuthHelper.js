import axios from 'axios';

/**
 * This will call login api
 * @param object formdata {email, password}
 * @returns object object of login user
 */
const login_api = async (formdata = {}) => {
    return await axios.post("/api/auth/login", formdata);
}

/**
 * This will call logout api
 * @param object formdata {email, password}
 * @returns object object of logout user
 */
 const logout_api = async (formdata = {}) => {
    return await axios.post("/api/auth/logout", formdata);
}

/**
 * This will call home api
 * @returns object
 */
// const dashboard_api = async (formdata = {}) => {
//     return await axios.post("/api/admin", formdata);
// }

export default {
    login_api,
    logout_api,
}