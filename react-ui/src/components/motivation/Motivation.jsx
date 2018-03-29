import React from 'react';
import './motivation.css'
import MotivationActions from '../../data/motivation/MotivationActions';
import Alert from '../Alert.jsx';

export default class Motivation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alertMessage: '',
            showing: false,
            alertAuthor: '',
        };
    }

    componentDidMount(){
        MotivationActions.addPhrase('Yah Yah Yah Yah Yah Yah!!!');
        MotivationActions.addPhrase('Way to go!!!!!');
        MotivationActions.addPhrase('Almost there!!!!', 'Will F.');
        MotivationActions.addPhrase('Graduation is way closer now than it was a year and a half ago');
        MotivationActions.addPhrase('Woooohooooooo');
    }

    alertMotivation(e){
        e.preventDefault();
        var message;
        var self = this;
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

        setTimeout(function(){
            if(self.state.alertMessage == message){
                self.setState({showing: false, alertMessage: "", alertAuthor: ""});
            }
        }, 2000);
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
