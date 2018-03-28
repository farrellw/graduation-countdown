import React from 'react';
import Motivation from './Motivation.jsx';
import Form from '../form/Form.jsx';
import MotivationActions from '../../data/motivation/MotivationActions';

const FormFields = [{label: 'inputValue'}, {label: 'author'}];

var motivationSubmit = function(fieldState){
	MotivationActions.addPhrase(fieldState.inputValue, fieldState.author);
};

export default class MotivationContainer extends React.Component{

	render(){
		return (
			<div className="container" id="encouragement-container">
				<Motivation phrases={this.props.phrases}/><br />
				<Form fields={FormFields} action={motivationSubmit}/>
			</div>
		)
	}
}
