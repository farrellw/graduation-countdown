import React from 'react';

export default class Form extends React.Component{
	render(){
		return (
			<div className="form-group">
				<label>{this.props.field.label}</label>
				<input type={this.props.field.type} className="form-control" value={this.props.inputValue} onChange={this.props.onChange}/>
			</div>
		)
	}
}
