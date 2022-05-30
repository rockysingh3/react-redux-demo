import { BUY_MONGO } from "./mangoTypes"



const initialState = {
    numOfMangos: 30
}

const mongoReducer = (state = initialState, action) => {

    switch(action.type) {
        case BUY_MONGO: return {
            ...state,
            numOfMangos: state.numOfMangos - 1
        }

        default: return state  
    }

}

export default mongoReducer
