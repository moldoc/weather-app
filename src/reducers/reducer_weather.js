import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
      // concat creates a new array that contains the old array + new stuff
      //return state.concat([action.payload.data]);
       return [action.payload.data, ...state];
  }
  return state;
}
