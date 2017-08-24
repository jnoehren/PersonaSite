const initialState = {
	counter: 0
}

function AppReducer(state, action){
	if(typeof state === "undefined"){
		return initialState;
	}

	switch (action.type){
		case "Add" :
			return Object.assign( {}, state, { counter: state.counter + 1} )
		default:
			return state;
	}
}

export default AppReducer;