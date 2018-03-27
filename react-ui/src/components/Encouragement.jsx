import React from 'react';
import './encouragement.css'

export default class Encouragement extends React.Component {
    constructor(props){
        super(props);
        this.phrases = this.props.phrases;
    }

    alertEncouragement(e){
      e.preventDefault();
      var randomIndex = Math.floor(Math.random() * this.phrases.length);

      alert(this.phrases[randomIndex]);
    }

    render(){
      return (
        <button className='btn btn-info' onClick={this.alertEncouragement.bind(this)} onTouchEnd={this.alertEncouragement.bind(this)}>Encouragement Button</button>
      )
    }
}
