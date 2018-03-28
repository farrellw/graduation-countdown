import React from 'react';
import MotivationActions from '../../data/motivation/MotivationActions';

export default class TextInput extends React.Component{
	constructor(){
		super();
		this.state ={
			inputValue: ""
		}
	}

	onTextChange(e){
		e.preventDefault();

		this.setState({inputValue: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		var inputValue = this.state.inputValue;

		if(inputValue){
			MotivationActions.addPhrase(inputValue);
			this.setState({inputValue: ""});
		}
	}

	render(){
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<div className="form-group">
					<label>{this.props.label}</label>
					<input className="form-control" value={this.state.inputValue} onChange={this.onTextChange.bind(this)}/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}
