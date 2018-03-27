import React from 'react';


export default class TextInput extends React.Component{
	constructor(){
		super();
		this.state ={
			value: ""
		}
	}

	onTextChange(e){
		// e.preventDefault();
		this.setState({value: this.state.value + "a"});
	}

	render(){
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<input value={this.state.value} onChange={this.onTextChange.bind(this, this.props.label)}/>
			</div>
		)
	}
}
