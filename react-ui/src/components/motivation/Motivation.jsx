import React from 'react';
import './motivation.css'
import MotivationActions from '../../data/motivation/MotivationActions';

export default class Motivation extends React.Component {

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

        if (this.props.phrases && this.props.phrases.size > 0) {
            var randomIndex = Math.floor(Math.random() * this.props.phrases.size) + 1;
            var phrase = this.props.phrases.get('id-' + randomIndex);
            message = phrase.text + ". By: " + phrase.author;
        } else {
            message = 'Nobody has added anything motivating lately.'
        }
        alert(message);
    }

    render(){
      return (
        <button className='btn btn-info motivation-button' onClick={this.alertMotivation.bind(this)} onTouchEnd={this.alertMotivation.bind(this)}>Motivation Button</button>
      )
    }
}
