import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
	streams: []
}

const listStreamsReducer = (state = initialState, action) => {
	switch (action.type) {

		case ActionTypes.GET_LIST_STREAMS:
			return {
				...state,
				streams: action.streams
			}
			
		default:
			return state;
	}
}

export default listStreamsReducer;