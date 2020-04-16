const initialState = {
    message: "",
    status: '',
    isFetching: false,
    error: ''
};

export const dogReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DOG_START":
            return{
                ...state,
                isFetching: true
            };
        case "FETCH_DOG_SUCCESS":
            return{
                ...state,
                isFetching: false,
                message: action.payload,
                error: ''
            }
        case "FETCH_DOG_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default: 
            return state;
    }
};