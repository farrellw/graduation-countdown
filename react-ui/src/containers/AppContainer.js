import App from '../App.jsx';
import React from 'react';
import {Container} from 'flux/utils';
import MotivationStore from '../data/motivation/MotivationStore';
import CountdownStore from '../data/countdown/CountdownStore';


class AppContainer extends React.Component {
	static getStores() {
		return [MotivationStore, CountdownStore];
	}

	static calculateState(prevState) {
		return {
			phrases: MotivationStore.getState(),
			countdown: CountdownStore.getState(),
		};
	}

	render() {
		return <App phrases={this.state.phrases} date={this.state.countdown}/>;
	}
}

const container = Container.create(AppContainer);
export default container;
