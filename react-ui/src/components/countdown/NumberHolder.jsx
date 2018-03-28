import React from 'react';

export default class NumberHolder extends React.Component{
	render(){
		return (
			<div className="holder">
				<span>{this.props.value}</span><br /><br />
				<p>{this.props.label}</p>
			</div>
		)
	}
}