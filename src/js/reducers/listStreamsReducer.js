import * as ActionTypes from '../constants/ActionTypes';
import { List, Map } from 'immutable';

const initialState = Map({	
	streams: List([])
});

const listStreamsReducer = (state = initialState, action) => {
	switch (action.type) {

		case ActionTypes.GET_LIST_STREAMS:
			return Map({
				...state,
				streams: List(action.streams)
			})
			
		default:
			return state;
	}
}

export default listStreamsReducer;