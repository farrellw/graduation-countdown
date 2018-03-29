import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

export default class Alerter extends React.Component {
	render() {
		if (this.props.showing) {
			return (
				<Alert bsStyle="success">
					<figure>
						<blockquote>
							{this.props.message}
						</blockquote>
						<figcaption>{this.props.author}</figcaption>
					</figure>
				</Alert>
			);
		} else {
			return (
				<div></div>
			)
		}
	}
}