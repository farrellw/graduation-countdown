import React from 'react';
import Input from './Input.jsx';

function buildStateFromFields(fields){
	var stateObject = {};

	fields.forEach(function(field){
		stateObject[field.label] = "";
	});

	return stateObject;
}

export default class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = buildStateFromFields(this.props.fields)
	}

	onTextChange(label, e){
		e.preventDefault();
		var setStateObject = {};

		setStateObject[label] = e.target.value;
		this.setState(setStateObject);
	}

	onSubmit(fields, e){
		e.preventDefault();
		var inputValue = this.state.inputValue;
		var newState = {};

		fields.forEach(function(field){
			newState[field.label] = '';
		});

		if(inputValue){
			this.props.action(this.state);
			this.setState(buildStateFromFields(fields));
		}
	}

	render(){
		return (
			<form onSubmit={this.onSubmit.bind(this, this.props.fields)}>
				{this.props.fields.map((field) =>
					<Input field={field} inputValue={this.state[field.label]} onChange={this.onTextChange.bind(this, field.label)} key={field.label}/>
				)}
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}