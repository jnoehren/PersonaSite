import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AppActions } from '../actions'

class Confident extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className = "capsule personas">
				<h1>Personas</h1>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) =>{
	return {
		testClick: () => dispatch(AppActions("Add"))
	}
}
const mapStateToProps = (state) =>{
	return state;
}

const DefaultApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(Confident)

export default DefaultApp