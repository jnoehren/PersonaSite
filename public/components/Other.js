import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AppActions } from '../actions'

class Other extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className = "capsule other">
				<h1>Other</h1>
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
)(Other)

export default DefaultApp