import { BUY_ICECREAM } from "./iceCreamTypes";


const initialState = {
    numIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_ICECREAM: return {
                // first add the old state propities to the object and then modifiy them
                ...state,
                numIceCream: state.numIceCream - 1
            }

            default: return state 
        }
}


export default iceCreamReducer


