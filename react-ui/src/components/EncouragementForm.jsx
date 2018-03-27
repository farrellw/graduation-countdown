import React from 'react';
import TextInput from './TextInput.jsx';

export default class EncouragementForm extends React.Component {
	constructor(){
		super();
		this.state = {
			author: "",
			phrase: ""
		}
	}

	onTextChange(label, e){
		console.log('HIt');
		console.log(this);
		console.log(label);
		e.preventDefault();
	}

	render(){
		return (
			<form className="form">
				<TextInput label="author" value={this.state.author}/>
				<TextInput label="phrase" value={this.state.phrase}/>
				<button>Submit New Phrase</button>
			</form>
		)
	}

}