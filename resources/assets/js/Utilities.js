// this will used for common function which will used by store

const get_user_object_for_local = (id, name, email) => {
    return {
        id,
        name,
        email,
    }
}

const get_detail_object_for_local = (age, gender, state) => {
    return {
        age,
        gender,
        state,
    }
}

export default {
    get_user_object_for_local,
    get_detail_object_for_local
}