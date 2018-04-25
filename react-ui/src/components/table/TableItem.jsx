import React from 'react';
import MotivationActions from '../../data/motivation/MotivationActions';
import Dialog from 'react-bootstrap-dialog'

export default class TableItem extends React.Component {
	constructor(props){
		super(props);
	}

	onClick = e => {
		e.preventDefault();
		var self = this;

		if(!this.props.password || this.props.password != 'Password'){
			this.dialog.show({
				title: 'Authentication Needed',
				body: 'To delete, please enter correct admin password at bottom of table',
				actions: [
					Dialog.OKAction()
				],
				bsSize: 'small',
				onHide: (dialog) => {
					dialog.hide();
					console.log('closed by clicking background.')
				}
			})
		} else {
			fetch('/api/phrases/' + this.props.phrase.databaseId , {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'DELETE',
			}).then(function(done){
				MotivationActions.deletePhrase(self.props.phrase.id);
			}).catch(function(err){
				console.log('Error');
				console.log(err);
			})

		}
	}

	render(){
		return (
			<tr>
				<th scope="row">{this.props.phrase.id}</th>
				<td>{this.props.phrase.message}</td>
				<td>{this.props.phrase.author}</td>
				<td><button className="btn btn-warning" onClick={this.onClick.bind(this)}>
					Delete
				</button></td>
				<Dialog enforceFocus={false} ref={(el) => { this.dialog = el }} />
			</tr>
		)
	}

}