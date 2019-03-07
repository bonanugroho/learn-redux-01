import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return { 
          ...state,
          counter: state.counter + 1 
        };
    case actionTypes.DECREASE_COUNTER:
      return { 
          ...state,
          counter: state.counter - 1 
        };
    case actionTypes.ADD_COUNTER:
      return { 
          ...state,
          counter: state.counter + action.value 
        };
    case actionTypes.MIN_COUNTER:
      return { 
          ...state,
          counter: state.counter - action.value 
        };
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            results: state.results.concat({id: new Date, value: state.counter})
        }
    case actionTypes.DELETE_RESULT:
        const updatedArray = state.results.filter( result => result.id !== action.resElId );
        return {
            ...state,
            results: updatedArray
        }
  }
  return state;
};

export default reducer;