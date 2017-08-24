import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { AppActions } from './actions'

class App extends React.Component{
	constructor(props){
		super(props)
	}

	click(){
		this.props.testClick();
	}

	render(){
		return(
			<div>
				<h1> Redux </h1>
				<h2> Counter: {this.props.counter}</h2>
				<button onClick={this.click.bind(this)}>Click me</button>
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
)(App)

export default DefaultApp