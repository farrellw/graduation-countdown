import App from '../App.jsx';
import React from 'react';
import {Container} from 'flux/utils';
import MotivationStore from '../data/motivation/MotivationStore';


class AppContainer extends React.Component {
	static getStores() {
		return [MotivationStore];
	}

	static calculateState(prevState) {
		return {
			phrases: MotivationStore.getState(),
		};
	}

	render() {
		return <App phrases={this.state.phrases} />;
	}
}

const container = Container.create(AppContainer);
export default container;
