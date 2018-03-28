import React from "react";
import NumberHolder from './NumberHolder.jsx';
import './countdown.css';

export default class CountdownContainer extends React.Component {
  constructor() {
	  super();
	  this.state = {
		  timeLeft: {
			  days: 0,
			  hours: 0,
			  minutes: 0,
			  seconds: 0
		  }
	  };
	}

	calculateTimeLeft(){
		var now = new Date();
		var difference = this.props.date - now;

		var days = Math.floor(difference / (1000 * 60 * 60 * 24));
		var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((difference % (1000 * 60)) / 1000);

		this.setState({
			timeLeft: {
				hours: hours,
				days: days,
				minutes: minutes,
				seconds: seconds
			}
		});
	}

  componentDidMount(){
    this.calculateTimeLeft();

    var self = this;
    setInterval(function() {
      self.calculateTimeLeft();
    }, 1000);
  }

  render(){
    return (
		<div id="countdown" className="container">
			<div id="tiles" className="labels">
				<NumberHolder value={this.state.timeLeft.days} label="Days"/>
				<NumberHolder value={this.state.timeLeft.hours} label="Hours"/>
				<NumberHolder value={this.state.timeLeft.minutes} label="Minutes"/>
				<NumberHolder value={this.state.timeLeft.seconds} label="Seconds"/>
			</div>
		</div>
    );
  }
}
