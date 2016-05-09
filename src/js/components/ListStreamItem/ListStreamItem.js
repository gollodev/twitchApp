import React, { Component, PropTypes } from 'react';
import { FlatButton } from 'material-ui';
import {
	Card, 
	CardActions, 
	CardHeader, 
	CardMedia, 
	CardTitle,
	CardText
} from 'material-ui';

import './ListStreamItem.scss';

class ListStreamItem extends Component {

	static propTypes = {
		channel: PropTypes.object.isRequired
	}

	render() {
		const { channel } = this.props;			
		return (			
			<Card className="Card">				
				<CardHeader
				    title={channel.display_name}
				    subtitle={channel.game}
				    avatar={channel.logo}
				/>			    
				<img src={channel.profile_banner} />			    
				<CardText>
				   	<span>Views: {channel.views}</span>
				   	<br/>
				   	<span>Followers: {channel.followers}</span>
				   	<br/>
				   	<span>Status: {channel.status}</span>
				</CardText>
				<CardActions>
					<a href={channel.url} target="_blank">
						<FlatButton label="To Stream"/>
					</a>				  			      
				</CardActions>
			</Card>						
		);
	}
}

export default ListStreamItem;