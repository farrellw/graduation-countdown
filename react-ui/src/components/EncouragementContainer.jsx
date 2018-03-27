import React from 'react';
import Encouragement from './Encouragement.jsx';

const encouragementArray = [
	'Almost there!',
	// 'Finish line approaching!!',
	// 'Way to go!!',
	// 'You`ll be done soon!!',
	// 'Wooohooooo!!!',
	// 'Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah',
	// 'Think of all those long ass papers in your past',
	// 'You can finish the year strong',
	// 'The end of year party will be dope!',
	'Graduation is way closer now than it was a year and a half ago'
];

export default class EncouragementContainer extends React.Component{
	constructor(props){
		super(props);
		this.encouragementArray = encouragementArray.concat(props.phrases.map(function(objector){return objector.text}));
	}

	render(){
		return (
			<div className="container" id="encouragement-container">
				<Encouragement phrases={this.encouragementArray}/><br />
			</div>
		)
	}
}