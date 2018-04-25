import React from 'react';
import * as _ from 'underscore';
import TableItem from './TableItem.jsx';
import './table.css';

export default class MyTable extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let phrases = [];

		for(var i = 1; i <= (this.props.phrases.size + 100); i++){
			var phrase = {};
			var mappedPhrase = this.props.phrases.get('id-' + i);
			if(mappedPhrase){
				phrase.id = i;
				phrase.message = mappedPhrase.text;
				phrase.author = mappedPhrase.author;
				phrase.databaseId = mappedPhrase.databaseId;
				phrases.push(phrase);
			}
		}

		return (
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Message</th>
							<th scope="col">Author</th>
							<th scope="col">Remove</th>
						</tr>
					</thead>
					<tbody>
					{
						_.map(phrases, function(phrase){
							return <TableItem key={phrase.id} phrase={phrase} password={this.props.password}/>
						}, this)
					}
					</tbody>

				</table>
			</div>
		)
	}
}