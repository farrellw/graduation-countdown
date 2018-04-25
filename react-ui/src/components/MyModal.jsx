import React from 'react';
import MyTable from './table/Table.jsx';
import { Modal, Button }  from 'react-bootstrap';

const DEFAULT_TITLE = 'View All Phrases';

export default class MyModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title1: DEFAULT_TITLE,
			open: false,
			password: ''
		};

	}

	closeModal(){
		this.setState({open: false});
	}

	openModal(){
		this.setState({open: true});
	}

	clearPassword = () => {
		this.setState({password: ''});
	}

	inputChanged = e => {
		e.preventDefault();
		this.setState({password: e.target.value})
	}


	render(){
		return (
			<div>
				<button type="button" className="btn btn-primary" onClick={this.openModal.bind(this)}>See All Phrases</button>
				<div className="static-modal">
					<Modal show={this.state.open} onHide={this.closeModal.bind(this)} enforcefocus="false">
						<Modal.Header closeButton>
							<Modal.Title>All Motivational Phrases</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<MyTable phrases={this.props.phrases} password={this.state.password} clearFunction={this.clearPassword.bind(this)}/>
						</Modal.Body>
						<Modal.Footer>

						</Modal.Footer>
						<Modal.Footer>
							<label>Admin Password</label><br/>
							<input id="password" type="text" onChange={this.inputChanged.bind(this)} value={this.state.password}/><br/><br/>
							<Button onClick={this.closeModal.bind(this)}>Close</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}