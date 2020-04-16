import axios from 'axios';

export const fetchDog = () => {
    return dispatch => {
        dispatch({ type: "FETCH_DOG_START" })
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                dispatch({ type: "FETCH_DOG_SUCCESS", payload: res.data.message })
            })
            .catch(err => {
                dispatch({ type: "FETCH_DOG_FAILURE", payload: `Error ${err.response.data}` })
            });
    }
}