import React  from "react"
import { connect } from 'react-redux'
import { buyIceCream } from "../redux"


function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numIceCream: state.iceCream.numIceCream
    }
}

const mapDispstchProps = dispatch => {
    return {
        buyCake: () => dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispstchProps)(IceCreamContainer)