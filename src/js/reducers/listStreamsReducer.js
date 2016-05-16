import * as ActionTypes from '../constants/ActionTypes';
import { List, Map, Record } from 'immutable';

const streamsState = new Record({
	streams: List([
		Map({
			_id: null,
			game: 'undefined',
			viewers: null,
			created_at: 'undefined',
			video_height: null,
			average_fps: null,
			delay: 0,
			is_playlist: null
		})
	])
});

const initialState = new streamsState;

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