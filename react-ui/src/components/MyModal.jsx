import React from 'react';
import Modal from 'react-bootstrap-modal'
import MyTable from './table/Table.jsx';

const DEFAULT_TITLE = 'View All Phrases';

export default class MyModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title1: DEFAULT_TITLE,
			open: false
		};

	}

	closeModal(){
		this.setState({open: false});
	}

	openModal(){
		this.setState({open: true});
	}

	render(){
		return (
			<div>
				<button type="button" className="btn btn-primary" onClick={this.openModal.bind(this)}>See All Phrases</button>
				<div className="static-modal">
					<Modal show={this.state.open} onHide={this.closeModal.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>All Motivational Phrases</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<MyTable phrases={this.props.phrases}/>
						</Modal.Body>
						<Modal.Footer>
							<Modal.Dismiss className='btn btn-default'>Close</Modal.Dismiss>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}