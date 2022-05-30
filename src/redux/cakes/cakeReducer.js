import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}


const cakeReducer = (state = initialState, action) => {

    switch(action.type) {
        case BUY_CAKE: return {
            // first add the old state propities to the object and then modifiy them
            ...state,
            numOfCakes: state.numOfCakes - 1
        }


        default: return state
    }
}

export default cakeReducer
