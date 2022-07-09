const INITIAL_STATE = {
	counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case 'INCREMENT': return state + 1
       case 'DECREMENT': return state - 1
       case 'RESET' : return 0 
       default: return state.counter
    }
 }
 export default counterReducer;