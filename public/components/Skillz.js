import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AppActions } from '../actions'

class Skillz extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className = "capsule skillz">
				<h1>Skillz</h1>
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
)(Skillz)

export default DefaultApp