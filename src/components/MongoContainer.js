import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyMongo } from '../redux'


const MongoContainer = () => {

    // this hook replaces mapStateToProps 
    const numOfMangos = useSelector(state => state.mango.numOfMangos)
    // this refers to the function in the reducer
    const dispatch = useDispatch()
    // {`hello world ${console.log(numOfMangos)}`}

    return  (
        <div>
            <h2>Number of Mangos: {numOfMangos}</h2> 
            <button onClick={() => dispatch(buyMongo())}>Buy Mangos</button>
        </div>
    )
}

export default MongoContainer


