import React from 'react';
import './motivation.css'
import MotivationActions from '../../data/motivation/MotivationActions';
import Alert from '../Alert.jsx';

//TODO allow deleting of phrases.
export default class Motivation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alertMessage: '',
            showing: false,
            alertAuthor: '',
        };
    }

	componentDidMount() {
		fetch('/api/phrases')
			.then(res => {
				return res.json()
			})
			.then(phrases => {
				if(phrases && phrases.phrases){
					phrases.phrases.forEach(function(phrase){
						MotivationActions.addPhrase(phrase.text, phrase.author);
					})
				}
			}).catch(err => {
				console.log('Error');
				console.log(err);
			})
	}

    alertMotivation(e){
        e.preventDefault();
        var message;
        var author = "";

        if (this.props.phrases && this.props.phrases.size > 0) {
            var randomIndex = Math.floor(Math.random() * this.props.phrases.size) + 1;
            var phrase = this.props.phrases.get('id-' + randomIndex);
            message = phrase.text;
            author = phrase.author;
        } else {
            message = 'Nobody has added anything motivating lately.'
        }

        this.setState({showing: true, alertMessage: message, alertAuthor: author});
    }

    render(){
      return (
        <div>
            <Alert message={this.state.alertMessage} showing={this.state.showing} author={this.state.alertAuthor}/>
            <button className='btn btn-info motivation-button' onClick={this.alertMotivation.bind(this)} onTouchEnd={this.alertMotivation.bind(this)}>Random Motivation Button</button>
        </div>
      )
    }
}
