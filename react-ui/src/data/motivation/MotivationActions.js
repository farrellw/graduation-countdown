import MotivationActionTypes from './MotivationActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
	addPhrase(text, author){
		Dispatcher.dispatch({
			type: MotivationActionTypes.ADD_PHRASE,
			text,
			author,
		})
	}
};

export default Actions;
