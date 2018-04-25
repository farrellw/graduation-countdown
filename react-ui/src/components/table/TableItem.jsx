import React from 'react';

export default class TableItem extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<tr>
				<th scope="row">{this.props.phrase.id}</th>
				<td>{this.props.phrase.message}</td>
				<td>{this.props.phrase.author}</td>
			</tr>
		)
	}

}