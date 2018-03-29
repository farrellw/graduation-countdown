import React from 'react';
import Motivation from './Motivation.jsx';
import Form from '../form/Form.jsx';
import MotivationActions from '../../data/motivation/MotivationActions';
import Field from '../../models/Field';

var motivationSubmit = function(fieldState){
	MotivationActions.addPhrase(fieldState.phrase, fieldState.author);
};

export default class MotivationContainer extends React.Component{
	constructor(){
		super();
		this.fields = [
			new Field({key: 'phrase', label: 'Add Motivation Phrase', type: 'text'}),
			new Field({key: 'author', label: 'Author', type: 'text'})
		]
	}

	render(){
		return (
			<div className="container" id="encouragement-container">
				<Motivation phrases={this.props.phrases}/>
				<Form fields={this.fields} action={motivationSubmit}/>
			</div>
		)
	}
}
