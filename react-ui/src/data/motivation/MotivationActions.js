import MotivationActionTypes from './MotivationActionTypes';
import Dispatcher from '../Dispatcher';

const Actions = {
	addPhrase(text){
		Dispatcher.dispatch({
			type: MotivationActionTypes.ADD_PHRASE,
			text,
		})
	}
};

export default Actions;
