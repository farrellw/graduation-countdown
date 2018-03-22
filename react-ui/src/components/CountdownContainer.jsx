import React from "react";
import './countdown.css';

export default class CountdownContainer extends React.Component {
  constructor() {
		super();
    this.graduationDate = new Date('May 17, 2018 19:30:00');
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
		var difference = this.graduationDate - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

		this.setState({ timeLeft: {
			hours: hours,
			days: days,
			minutes: minutes,
			seconds: seconds
		}});
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
      <div id="countdown">
        <div id="tiles" className="labels">
			<div className="holder">
				<span>{this.state.timeLeft.days}</span><br /><br />
				<p>Days</p>
			</div>
			<div className="holder">
				<span>{this.state.timeLeft.hours}</span><br /><br />
				<p>Hours</p>
			</div>
			<div className="holder">
				<span>{this.state.timeLeft.minutes}</span><br /><br />
				<p>Minutes</p>
			</div>
			<div className="holder">
				<span>{this.state.timeLeft.seconds}</span><br /><br />
				<p>Seconds</p>
			</div>
        </div>
      </div>
    );
  }
}
