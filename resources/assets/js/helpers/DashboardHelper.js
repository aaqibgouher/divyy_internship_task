import axios from 'axios';

 const detail_api = async (formdata = {}) => {
    return await axios.post("/api/auth/details", formdata);
}

const edit_api = async (formdata = {}) => {
    return await axios.post(`/api/auth/edit`, formdata);
}

export default {
    detail_api,
    edit_api
}