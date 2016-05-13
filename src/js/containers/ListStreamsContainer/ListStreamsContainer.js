import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as StreamsActions from '../../actions/StreamsActions';
import ListStreams from '../../components/ListStreams/ListStreams';
import { AppBar } from 'material-ui';
import { FontIcon } from 'material-ui';

class ListStreamsContainer extends Component {

	static propTypes = {
		listStreams: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	}

	componentWillMount() {
		this.props.actions.fetchStreams();
	}		

	render() {					
		const { streams } = this.props.listStreams.toObject();
		const { actions } = this.props;		
		const appBarStyle = { position: 'fixed' }; 				
		return (
			<div>
				<AppBar
				    title="TwitchApp"
				    style={appBarStyle}				    		    			    
				/>
				<ListStreams 
					streams={streams} 
					fetchStreams={actions.fetchStreams}
				/>
			</div>			
		)
	}
}

const mapStateToProps = (state) => {
	return {
		listStreams: state.listStreamsReducer
	};
}

const mapActionsToProps = (dispatch) => {
	return {
		actions: bindActionCreators(StreamsActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ListStreamsContainer)