import * as ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = {
	streams: 'https://api.twitch.tv/kraken/streams'
};

const getListStreamsAction = (streams) => {

	if (!Array.isArray(streams)) {
		throw new Error('Streams is not Array!');
	}

	return {
		type: ActionTypes.GET_LIST_STREAMS,
		streams
	}
}

const fetchStreams = () => {
	return (dispatch) => {
		return fetch(BASE_URL.streams)
			   .then(response => response.json())			   
			   .then(data => dispatch(getListStreamsAction(data.streams)))
			   .catch(err => console.log(err));
	}
}

export {
	fetchStreams
};