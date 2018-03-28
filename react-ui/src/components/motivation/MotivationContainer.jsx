import React from 'react';
import Motivation from './Motivation.jsx';
import TextInput from './TextInput.jsx';

export default class MotivationContainer extends React.Component{
	render(){
		return (
			<div className="container" id="encouragement-container">
				<Motivation phrases={this.props.phrases}/><br />
				<TextInput id="textInput"></TextInput>
			</div>
		)
	}
}
