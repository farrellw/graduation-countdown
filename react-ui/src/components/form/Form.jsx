import React from 'react';
import Input from './Input.jsx';

function buildEmptyStateFromFields(fields){
	var stateObject = {};

	fields.forEach(function(field){
		stateObject[field.key] = "";
	});

	return stateObject;
}

export default class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = buildEmptyStateFromFields(this.props.fields);
	}

	onTextChange(key, e){
		e.preventDefault();
		var setStateObject = {};

		setStateObject[key] = e.target.value;
		this.setState(setStateObject);
	}

	onSubmit(fields, e){
		e.preventDefault();
		var newState = {};

		fields.forEach(function(field){
			newState[field.key] = '';
		});

		this.props.action(this.state);
		this.setState(buildEmptyStateFromFields(fields));
	}

	render(){
		return (
			<form onSubmit={this.onSubmit.bind(this, this.props.fields)}>
				{this.props.fields.map((field) =>
					<Input field={field} inputValue={this.state[field.key]} onChange={this.onTextChange.bind(this, field.key)} key={field.key}/>
				)}
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}