import React  from "react"
import { connect } from 'react-redux'
import { buyCake } from "../redux"


function CakeContainer(props) {
    return (
        <div>
            {console.log(props)}
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispstchProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispstchProps)(CakeContainer)