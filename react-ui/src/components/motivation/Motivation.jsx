import React from 'react';
import './motivation.css'

export default class Motivation extends React.Component {
    alertMotivation(e){
      e.preventDefault();
      var message;

      if(this.props.phrases && this.props.phrases.size > 0){
        var randomIndex = Math.floor(Math.random() * this.props.phrases.size) + 1;
        message = this.props.phrases.get('id-' + randomIndex).text;
      } else {
        message = 'Nobody has added anything motivating lately.'
      }
      alert(message);
    }

    render(){
      return (
        <button className='btn btn-info' onClick={this.alertMotivation.bind(this)} onTouchEnd={this.alertMotivation.bind(this)}>Motivation Button</button>
      )
    }
}
