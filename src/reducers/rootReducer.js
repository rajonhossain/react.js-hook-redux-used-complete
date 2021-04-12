
const initialState = {
	counter: []
}


function rootReducer (state=initialState, action)  {
	switch(action.type){		
		case "DECREMENT":			
			return {counter: [...state.counter, action.playload]}
		default :
			return state;
	}
}


export default rootReducer;