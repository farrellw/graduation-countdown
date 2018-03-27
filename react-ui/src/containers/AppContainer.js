import App from '../App';
import React from 'react';
import {Container} from 'flux/utils';
import TodoStore from '../data/CountdownStore';

class CounterContainer extends React.Component {
	static getStores() {
		return [TodoStore];
	}

	static calculateState(prevState) {
		return {
			phrases: TodoStore.getState(),
		};
	}

	render() {
		return <App phrases={this.state.phrases} />;
	}
}

const container = Container.create(CounterContainer);
export default container;