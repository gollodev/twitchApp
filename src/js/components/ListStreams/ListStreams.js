import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import ListStreamItem from '../ListStreamItem/ListStreamItem';
import './ListStreams.scss';

class ListStreams extends Component {

	static propTypes = {
		streams: PropTypes.instanceOf(Immutable.List).isRequired,
		fetchStreams: PropTypes.func.isRequired
	}		

	render() {	
		const { streams } = this.props;						
		return (
			<div className="ContainerCard">	
				{
					streams.map( (stream) =>
						<ListStreamItem 
							key={stream._id}
							channel={stream.channel}
						/>						
					)
				}				
			</div>
		);	
	}
}

export default ListStreams;