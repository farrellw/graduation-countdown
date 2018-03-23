import React from 'react';
import './encouragement.css'

const encouragementArray = [
  'Almost there!',
  'Finish line approaching!!',
  'Way to go!!',
  'You`ll be done soon!!',
  'Wooohooooo!!!',
  'Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah Yah',
  'Think of all those long ass papers in your past',
  'You can finish the year strong',
  'The end of year party will be dope!',
  'Graduation is way closer now than it was a year and a half ago'
]

export default class Encouragement extends React.Component {
    constructor(){
        super()
        this.encouragementArray = encouragementArray;
    }

    alertEncouragement(e){
      e.preventDefault();
      var randomIndex = Math.floor(Math.random() * encouragementArray.length)
      alert(this.encouragementArray[randomIndex]);
    }

    render(){
      return (
        <button className='btn btn-info' onClick={this.alertEncouragement.bind(this)} onTap={this.alertEncouragement.bind(this)}>Encouragement Button</button>
      )
    }
}
