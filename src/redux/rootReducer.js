import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import mongoReducer from "./mangos/mangoReducer";



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    mango: mongoReducer
})


export default rootReducer